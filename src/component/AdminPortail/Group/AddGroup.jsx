import React, { useState, useEffect } from "react";
import { getGroupId, updateGroup } from "../../../service/GroupsService";

const UpdateGroup = ({ handleViewChange, groupId }) => {
  const [formData, setFormData] = useState({
    nameGroup: "",
    level: "",
    schoolYear: "",
    student: [],
    taughtSubjects: [],
    schedules: [],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGroupId(groupId)
      .then((response) => {
        const groupData = response.data;
        setFormData({
          nameGroup: groupData.nameGroup,
          level: groupData.level,
          schoolYear: groupData.schoolYear,
          student: [],
          taughtSubjects: [],
          schedules: [],
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du groupe",
          error
        );
      });
  }, [groupId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveCourseForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedGroup = {
      nameGroup: formData.nameGroup,
      level: formData.level,
      schoolYear: formData.schoolYear,
      student: [],
      taughtSubjects: [],
      schedules: [],
    };

    updateGroup(groupId, updatedGroup)
      .then((response) => {
        setSuccessMessage("Groupe mis à jour avec succès.");
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de la mise à jour du groupe.");
        setSuccessMessage("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative p-4">
      <button
        className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
        style={{ marginTop: "20px", top: "-50px" }}
        onClick={() => handleViewChange("groups")}
      >
        Retour
      </button>
      <div className="m-4 col-md-10 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Modifier un groupe
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
                    <input
                      type="text"
                      placeholder="Nom du groupe"
                      name="nameGroup"
                      value={formData.nameGroup}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Niveau"
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="date"
                      placeholder="Année scolaire"
                      name="schoolYear"
                      value={formData.schoolYear}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="time"
                      placeholder="Heure de fin"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Nom de la matière"
                      name="nameSubject"
                      value={formData.subject.nameSubject}
                      onChange={handleSubjectChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Description de l'horaire"
                      name="description"
                      value={formData.schedules.description}
                      onChange={handleScheduleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Nom du groupe"
                      name="groupName"
                      value={formData.schedules.groupName}
                      onChange={handleScheduleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
                    disabled={loading}
                  >
                    {loading ? "Modification en cours..." : "Modifier"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateGroup;
