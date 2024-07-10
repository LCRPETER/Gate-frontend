import React, { useEffect, useState } from "react";
import {
  deleteStudentById,
  getAllStudents,
} from "../../../service/StudentService";
import { Link } from "react-router-dom";
import DeleteStudentModal from "./DeleteStudentModal";
import UpdateStudent from "./UpdateStudent.jsx";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const studentsPerPage = 3;

  const [currentView, setCurrentView] = useState("students");

  const handleViewChange = (view, studentId = null) => {
    setSelectedStudent(studentId);
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "students":
        return renderStudentList();
      case "update-student":
        return (
          <UpdateStudent
            handleViewChange={handleViewChange}
            studentId={selectedStudent}
          />
        );
      default:
        return renderStudentList();
    }
  };

  useEffect(() => {
    getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the students!", error);
      });
  }, []);

  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedStudent) {
      deleteStudentById(selectedStudent.user_id)
        .then(() => {
          setStudents(
            students.filter(
              (student) => student.user_id !== selectedStudent.user_id
            )
          );
          setShowModal(false);
          setSelectedStudent(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the student!", error);
          setShowModal(false);
          setSelectedStudent(null);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * studentsPerPage < students.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * studentsPerPage;
  const currentStudents = students.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const renderStudentList = () => (
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
        {students.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Matricule</th>
                <th className="fw-bold">Nom</th>
                <th className="fw-bold">Prénom</th>
                <th className="fw-bold">Groupe</th>
                <th className="fw-bold">Niveau</th>
                <th className="fw-bold">Modifier</th>
                <th className="fw-bold">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student) => (
                <tr key={student.user_id}>
                  <td>
                    <Link to={`/students/${student.user_id}`}>
                      {student.matricule}
                    </Link>
                  </td>
                  <td>{student.lastName}</td>
                  <td>{student.firstName}</td>
                  <td>{student.groupeName}</td>
                  <td>{student.level}</td>
                  <td className="text-center fs-3">
                    <i
                      className="fa-solid fa-pen-to-square text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleViewChange("update-student", student.user_id)
                      }
                    ></i>
                  </td>
                  <td className="text-center fs-3 text-danger">
                    <i
                      className="fa-solid fa-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteClick(student)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des étudiants vide.</p>
        )}

        <DeleteStudentModal
          show={showModal}
          user={selectedStudent}
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
          {currentPage + 1}/{Math.ceil(students.length / studentsPerPage)}
        </div>
      </div>
    </>
  );

  return <>{renderView()}</>;
};

export default StudentList;
