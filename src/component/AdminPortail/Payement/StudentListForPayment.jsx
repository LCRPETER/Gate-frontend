import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudentsByGroupId } from "../../../service/GroupsService";

const StudentListForPayment = ({ handleViewChange }) => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { groupId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getStudentsByGroupId(groupId)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the students!", error);
      });
  }, [groupId]);

  const handleStudentClick = (studentId) => {
    navigate(`/students/${studentId}/add-payment`);
    handleViewChange("addPayment");
  };

  const studentsPerPage = 3;

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
        {students.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Matricule</th>
                <th className="fw-bold">Nom</th>
                <th className="fw-bold">Prénom</th>
                <th className="fw-bold">Email</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student) => (
                <tr key={student.user_id}>
                  <td
                    key={student.id}
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
};

export default StudentListForPayment;
