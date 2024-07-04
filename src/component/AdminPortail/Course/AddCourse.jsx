import React, { useState, useEffect } from "react";
import { getAllSubjects } from "../../../service/SubjectService";
import { createCourse } from "../../../service/CourseService";
import { getAllSchedulesSortedByDate } from "../../../service/ScheduleService";

const AddCourse = ({ handleViewChange }) => {
  const [subjectId, setSubjectId] = useState("");
  const [dateCourse, setDateCourse] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedScheduleId, setSelectedScheduleId] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [availableSchedules, setAvailableSchedules] = useState([]);

  useEffect(() => {
    getAllSubjects()
      .then((response) => {
        setAllSubjects(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des matières", error);
      });

    getAllSchedulesSortedByDate()
      .then((response) => {
        setAvailableSchedules(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des emplois du temps",
          error
        );
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "subjectId":
        setSubjectId(value);
        break;
      case "dateCourse":
        setDateCourse(value);
        break;
      case "dayOfWeek":
        setDayOfWeek(value);
        break;
      case "startTime":
        setStartTime(value);
        break;
      case "endTime":
        setEndTime(value);
        break;
      default:
        break;
    }
  };

  const handleScheduleSelection = (e) => {
    setSelectedScheduleId(e.target.value);
    if (
      e.target.value &&
      !schedules.find(
        (schedule) => schedule.schedule_id === parseInt(e.target.value)
      )
    ) {
      setSchedules([...schedules, { schedule_id: parseInt(e.target.value) }]);
    }
  };

  const saveCourseForm = (e) => {
    e.preventDefault();

    if (
      !subjectId ||
      !dateCourse ||
      !dayOfWeek ||
      !startTime ||
      !endTime ||
      !selectedScheduleId
    ) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const newCourse = {
      subject: { subject_id: parseInt(subjectId) },
      dateCourse,
      dayOfWeek,
      startTime,
      endTime,
      schedules,
    };

    createCourse(newCourse)
      .then((response) => {
        setSuccessMessage("Cours ajouté avec succès !");
        setErrorMessage("");
        console.log(response.data);
      })
      .catch((error) => {
        setSuccessMessage("");
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("Erreur lors de l'ajout du cours");
        }
        console.error("Erreur lors de l'ajout du cours", error);
      });
  };

  return (
    <div className="relative p-4">
      <button
        className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
        style={{ marginTop: "20px", top: "-50px" }}
        onClick={() => handleViewChange("subjects")}
      >
        Retour
      </button>
      <div className="m-4 col-md-6 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Ajouter un cours
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
              <form onSubmit={saveCourseForm}>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <select
                      name="subjectId"
                      className="form-select"
                      value={subjectId}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionner une matière</option>
                      {allSubjects.map((subject) => (
                        <option
                          key={subject.subject_id}
                          value={subject.subject_id}
                        >
                          {subject.nameSubject}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="date"
                      name="dateCourse"
                      value={dateCourse}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Jour de la semaine"
                      name="dayOfWeek"
                      value={dayOfWeek}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Heure de début"
                      name="startTime"
                      value={startTime}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Heure de fin"
                      name="endTime"
                      value={endTime}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <select
                      name="selectedScheduleId"
                      className="form-select"
                      value={selectedScheduleId}
                      onChange={handleScheduleSelection}
                      required
                    >
                      <option value="">Sélectionner un emploi du temps</option>
                      {availableSchedules.map((schedule) => (
                        <option
                          key={schedule.schedule_id}
                          value={schedule.schedule_id}
                        >
                          {`${schedule.description}" " ${schedule.groupName} `}
                          {schedule.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <ul>
                      {schedules.map((schedule, index) => (
                        <li key={index}>
                          Emploi du temps ID: {schedule.schedule_id}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mt-3 fs-6 d-flex align-items-center justify-content-center">
                    <button
                      type="submit"
                      className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
                    >
                      Ajouter
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

export default AddCourse;
