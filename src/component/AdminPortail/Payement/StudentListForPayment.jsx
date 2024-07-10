import React, { useEffect, useState } from "react";
import { getStudentsByGroupId } from "../../../service/GroupsService";
import AddPayment from "./AddPayment";
import "../../../App.css";

const StudentListForPayment = ({ groupId, handleViewChange }) => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentView, setCurrentView] = useState("students");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const studentsPerPage = 3;

  useEffect(() => {
    getStudentsByGroupId(groupId)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the students!", error);
      });
  }, [groupId]);

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

  const handleStudentClick = (studentId) => {
    setSelectedStudent(studentId);
    setCurrentView("addPayment");
  };

  const startIndex = currentPage * studentsPerPage;
  const currentStudents = students.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const renderView = () => {
    switch (currentView) {
      case "students":
        return (
          <>
            <div className="relative p-4">
              <button
                className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
                style={{ marginTop: "20px", top: "-50px" }}
                onClick={() => handleViewChange("groups")}
              >
                Retour
              </button>
            </div>
            <div className="p-2 ps-4">
              <i
                className="fa-solid fa-arrow-left-long bg-teal rounded-circle ms-2 text-light"
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
                  padding: "2.5px",
                }}
                onClick={handlePreviousPage}
              ></i>
              <i
                className="fa-solid fa-arrow-right-long active rounded-circle ms-2 text-light"
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
                  padding: "2.5px",
                }}
                onClick={handleNextPage}
              ></i>
            </div>
            <div className="container mt-1" style={{ width: "95%" }}>
              {students.length > 0 ? (
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className="bg-dark text-light border-2">Matricule</th>
                      <th className="bg-dark text-light border-2">Nom</th>
                      <th className="bg-dark text-light border-2">Prénom</th>
                      <th className="bg-dark text-light border-2">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentStudents.map((student) => (
                      <tr key={student.user_id}>
                        <td
                          key={student.user_id}
                          className="list-group-item"
                          onClick={() => handleStudentClick(student.user_id)}
                          style={{ cursor: "pointer" }}
                        >
                          {student.matricule}
                        </td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Liste des étudiants vide.</p>
              )}
            </div>
            <div className="ps-4 pe-5 d-flex align-items-center justify-content-between">
              <div>
                <i
                  className="fa-solid fa-arrow-left-long active rounded-circle ms-2 text-light"
                  style={{
                    cursor: "pointer",
                    fontSize: "15px",
                    padding: "2.5px",
                  }}
                  onClick={handlePreviousPage}
                ></i>
                <i
                  className="fa-solid fa-arrow-right-long bg-teal rounded-circle ms-2 text-light"
                  style={{
                    cursor: "pointer",
                    fontSize: "15px",
                    padding: "2.5px",
                  }}
                  onClick={handleNextPage}
                ></i>
              </div>
              <div>
                {currentPage + 1}/{Math.ceil(students.length / studentsPerPage)}
              </div>
            </div>
          </>
        );
      case "addPayment":
        return (
          <AddPayment
            studentId={selectedStudent}
            handleViewChange={handleViewChange}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderView()}</>;
};

export default StudentListForPayment;
