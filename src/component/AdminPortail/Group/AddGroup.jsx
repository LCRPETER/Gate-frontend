import React, { useState } from "react";
import { postGroupes } from "../../../service/GroupsService";

const AddGroup = ({ handleViewChange }) => {
  const [nameGroup, setNameGroup] = useState("");
  const [level, setLevel] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [student, setStudent] = useState([]);
  const [taughtSubjects, setTaughtSubjects] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const saveGroupForm = (e) => {
    e.preventDefault();
    const group = {
      nameGroup,
      level,
      schoolYear,
      student,
      taughtSubjects,
      schedules,
    };

    postGroupes(group)
      .then((response) => {
        setSuccessMessage("Groupe ajouté avec succès !");
        setErrorMessage("");
        console.log(response.data);
      })
      .catch((error) => {
        setSuccessMessage("");
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("Erreur lors de l'ajout du groupe");
        }
        console.error("Erreur lors de l'ajout du groupe", error);
      });
  };

  return (
    <div className="relative p-4">
      <button
        className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
        style={{ marginTop: "20px", top: "-100px" }}
        onClick={() => handleViewChange("groups")}
      >
        Retour
      </button>
      <div className="m-4 col-md-6 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Ajouter un groupe
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
              <form onSubmit={saveGroupForm}>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Groupe"
                      name="nameGroup"
                      value={nameGroup}
                      onChange={(e) => setNameGroup(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Niveau"
                      name="level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Année scolaire (ex: 2020/2024)"
                      name="schoolYear"
                      value={schoolYear}
                      onChange={(e) => setSchoolYear(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Liste étudiants"
                      name="student"
                      value={student.join(", ")}
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Liste emploi du temps"
                      name="schedules"
                      value={schedules.join(", ")}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Liste matières"
                      name="taughtSubjects"
                      value={taughtSubjects.join(", ")}
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mt-3 fs-6 d-flex align-items-center justify-content-center ">
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

export default AddGroup;
