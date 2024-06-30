import React, { useEffect, useState } from "react";
import TeacherService from "../../../service/TeacherService";
import { Link } from "react-router-dom";
import DeleteTeacherModal from "./DeleteTeacherModal";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const teachersPerPage = 3;

  useEffect(() => {
    TeacherService.getAllTeachers()
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the teachers!", error);
      });
  }, []);

  const handleDeleteClick = (teachers) => {
    setSelectedTeacher(teachers);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedTeacher) {
      TeacherService.deleteTeacherById(selectedTeacher.user_id)
        .then(() => {
          setTeachers(
            teachers.filter(
              (teacher) => teacher.user_id !== selectedTeacher.user_id
            )
          );
          setShowModal(false);
          setSelectedTeacher(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the teacher!", error);
          setShowModal(false);
          setSelectedTeacher(null);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTeacher(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * teachersPerPage < teachers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * teachersPerPage;
  const currentTeachers = teachers.slice(
    startIndex,
    startIndex + teachersPerPage
  );

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="bg-primary text-light fw-semibold rounded-pill p-1"
          style={{ marginRight: "30px", width: "120px" }}
        >
          + Ajouter
        </button>

        {showSearch && (
          <input
            type="text"
            className="form-control"
            placeholder="Recherche..."
            style={{ width: "200px", marginLeft: "5px" }}
          />
        )}
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={handleSearchToggle}
        >
          <i className="fa-solid fa-magnifying-glass fw-bold"></i>
        </div>
      </div>
      <div className="p-2 ps-4">
        <i
          class="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handlePreviousPage}
        ></i>
        <i
          class="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handleNextPage}
        ></i>
      </div>
      <div className="container mt-1" style={{ width: "95%" }}>
        {currentTeachers.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Matricule</th>
                <th className="fw-bold">Nom</th>
                <th className="fw-bold">Prénom</th>
                <th className="fw-bold">Matière</th>
                <th className="fw-bold">Modifier</th>
                <th className="fw-bold">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.user_id}>
                  <td>
                    <Link to={`/teachers/${teacher.user_id}`}>
                      {teacher.matricule}
                    </Link>
                  </td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.nameSubject}</td>
                  <td className="text-center fs-3">
                    <i
                      className="fa-solid fa-pen-to-square text-primary"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                  <td className="text-center fs-3 text-danger">
                    <i
                      className="fa-solid fa-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteClick(teacher)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des parents vide.</p>
        )}

        <DeleteTeacherModal
          show={showModal}
          user={selectedTeacher}
          onClose={handleCloseModal}
          onConfirm={handleDeleteConfirm}
        />
      </div>
      <div className=" ps-4 pe-5 d-flex align-items-center justify-content-between">
        <div>
          <i
            class="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handlePreviousPage}
          ></i>
          <i
            class="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handleNextPage}
          ></i>
        </div>
        <div>
          {currentPage + 1}/{Math.ceil(teachers.length / teachersPerPage)}
        </div>
      </div>
    </>
  );
};

export default TeacherList;
