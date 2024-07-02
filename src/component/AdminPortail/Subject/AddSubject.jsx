import React, { useState, useEffect } from "react";
import { createSubject } from "../../../service/SubjectService";
import { getAllGroupes } from "../../../service/GroupsService";

const AddSubject = ({ handleViewChange }) => {
  const [nameSubject, setNameSubject] = useState("");
  const [description, setDescription] = useState("");
  const [headTeacher, setHeadTeacher] = useState();
  const [allGroups, setAllGroups] = useState([]);
  const [grades, setGrades] = useState([]);
  const [course, setCourse] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nameSubject") {
      setNameSubject(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "headTeacher") {
      setHeadTeacher(value);
    }
  };

  const handleGroupChange = (e) => {
    const { value } = e.target;
    const group = allGroups.find((g) => g.group_id === parseInt(value));
    if (group && !selectedGroups.find((g) => g.group_id === group.group_id)) {
      setSelectedGroups([...selectedGroups, group]);
    }
  };

  const saveSubjectForm = (e) => {
    e.preventDefault();
    const subject = {
      nameSubject,
      description,
      headTeacher,
      groups: selectedGroups,
      assessments: [],
      notes: [],
      course: [],
    };

    createSubject(subject)
      .then((response) => {
        setSuccessMessage("Matière ajoutée avec succès !");
        setErrorMessage("");
        console.log(response.data);
      })
      .catch((error) => {
        setSuccessMessage("");
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("Erreur lors de l'ajout de la matière");
        }
        console.error("Erreur lors de l'ajout de la matière", error);
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
          Ajouter une matière
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
              <form onSubmit={saveSubjectForm}>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Nom de la matière"
                      name="nameSubject"
                      value={nameSubject}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={description}
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
                      placeholder="Professeur principal"
                      name="headTeacher"
                      value={headTeacher}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <select
                      name="groups"
                      className="form-select"
                      onChange={handleGroupChange}
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
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Liste des notes"
                      name="grades"
                      value={grades.join(", ")}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Liste cours"
                      name="course"
                      value={course.join(", ")}
                      readOnly
                      className="form-control"
                    />
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

export default AddSubject;
