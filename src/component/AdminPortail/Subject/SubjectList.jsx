import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tw-elements";
import { getAllSubjects } from "../../../service/SubjectService";
import DeleteSubjectModal from "./DeleteSubjectModal";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const subjectsPerPage = 3;

  useEffect(() => {
    getAllSubjects()
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the groups!", error);
      });
  }, []);

  const handleDeleteClick = (subject) => {
    setSelectedSubject(subject);
    setShowModal(true);
  };
  const handleDeleteConfirm = () => {
    if (selectedSubject) {
      SubjectService.deleteSubjectById(selectedSubject.subject_id)
        .then(() => {
          setSubjects(
            subjects.filter(
              (subject) => subject.subject_id !== selectedSubject.subject_id
            )
          );
          setShowModal(false);
          setSelectedSubject(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the subject!", error);
          setShowModal(false);
          setSelectedSubject(null);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSubject(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * subjectsPerPage < subjects.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * subjectsPerPage;
  const currentSubjects = subjects.slice(
    startIndex,
    startIndex + subjectsPerPage
  );

  return (
    <>
      <div className="p-2 ps-4">
        <i
          className="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handlePreviousPage}
        ></i>
        <i
          className="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handleNextPage}
        ></i>
      </div>
      <div className="container mt-1" style={{ width: "95%" }}>
        {currentSubjects.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Matière</th>
                <th className="fw-bold">Description</th>
                <th className="fw-bold">Enseignant</th>
                <th className="fw-bold">Modifier</th>
                <th className="fw-bold">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {currentSubjects.map((subject) => (
                <tr key={subject.subject_id}>
                  <td>
                    <Link to={`/subjects/${subject.subject_id}`}>
                      {subject.nameSubject}
                    </Link>
                  </td>
                  <td>{subject.description}</td>
                  <td>{subject.teacherFullName}</td>
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
                      onClick={() => handleDeleteClick(subject)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des subjectes vide.</p>
        )}

        <DeleteSubjectModal
          show={showModal}
          subject={selectedSubject}
          onClose={handleCloseModal}
          onConfirm={handleDeleteConfirm}
        />
      </div>
      <div className="ps-4 pe-5 d-flex align-items-center justify-content-between">
        <div>
          <i
            className="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handlePreviousPage}
          ></i>
          <i
            className="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handleNextPage}
          ></i>
        </div>
        <div>
          {currentPage + 1}/{Math.ceil(subjects.length / subjectsPerPage)}
        </div>
      </div>
    </>
  );
};

export default SubjectList;
