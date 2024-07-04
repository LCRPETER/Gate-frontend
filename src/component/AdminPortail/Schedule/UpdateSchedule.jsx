import React, { useState, useEffect } from "react";
import { updateSchedule } from "../../../service/ScheduleService";
import { getAllGroupes } from "../../../service/GroupsService";

const UpdateSchedule = ({ handleViewChange, scheduleToUpdate }) => {
  const [scheduleDescription, setScheduleDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [allGroups, setAllGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAllGroupes()
      .then((response) => {
        setAllGroups(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des groupes", error);
      });

    if (scheduleToUpdate) {
      setScheduleDescription(scheduleToUpdate.schedule_description);
      setStartDate(scheduleToUpdate.startDate);
      setEndDate(scheduleToUpdate.endDate);
      setSelectedGroup(scheduleToUpdate.groups);
    }
  }, [scheduleToUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "scheduleDescription") {
      setScheduleDescription(value);
    } else if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  const handleGroupChange = (e) => {
    const { value } = e.target;
    const group = allGroups.find((g) => g.group_id === parseInt(value));
    setSelectedGroup(group);
  };

  const saveScheduleForm = (e) => {
    e.preventDefault();

    if (!scheduleToUpdate) {
      setErrorMessage("Aucun emploi du temps sélectionné pour la mise à jour.");
      return;
    }

    const schedule = {
      schedule_id: scheduleToUpdate.schedule_id,
      schedule_description: scheduleDescription,
      startDate,
      endDate,
      groups: selectedGroup,
      course: [],
    };

    updateSchedule(schedule.schedule_id, schedule)
      .then((response) => {
        setSuccessMessage("Emploi du temps mis à jour avec succès !");
        setErrorMessage("");
        console.log(response.data);
      })
      .catch((error) => {
        setSuccessMessage("");
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("Erreur lors de la mise à jour de l'emploi du temps");
        }
        console.error(
          "Erreur lors de la mise à jour de l'emploi du temps",
          error
        );
      });
  };

  return (
    <div className="relative p-4">
      <button
        className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
        style={{ marginTop: "20px", top: "-50px" }}
        onClick={() => handleViewChange("schedules")}
      >
        Retour
      </button>
      <div className="m-4 col-md-6 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Modifier un emploi du temps
        </h2>
        {successMessage && (
          <div
            className="alert alert-success text-center"
            style={{ backgroundColor: "white", color: "green" }}
          >
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div
            className="alert alert-danger text-center"
            style={{ backgroundColor: "white", color: "red" }}
          >
            {errorMessage}
          </div>
        )}
        <div className="row">
          <div className="card">
            <div className="card-body">
              <form onSubmit={saveScheduleForm}>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Description de l'emploi du temps"
                      name="scheduleDescription"
                      value={scheduleDescription}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="date"
                      placeholder="Date de début"
                      name="startDate"
                      value={startDate}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="date"
                      placeholder="Date de fin"
                      name="endDate"
                      value={endDate}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <select
                      name="groups"
                      className="form-select"
                      onChange={handleGroupChange}
                      value={selectedGroup?.group_id || ""}
                      required
                    >
                      <option value="">Sélectionner un groupe</option>
                      {allGroups.map((group) => (
                        <option key={group.group_id} value={group.group_id}>
                          {group.nameGroup} - {group.level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mt-3 fs-6 d-flex align-items-center justify-content-center">
                    <button
                      type="submit"
                      className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
                    >
                      Modifier
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSchedule;
