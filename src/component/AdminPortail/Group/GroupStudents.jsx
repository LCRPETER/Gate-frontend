import React, { useEffect, useState } from "react";
import GroupService from "../../../service/GroupsService";

const GroupStudents = ({ groupId }) => {
  const [students, setStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    GroupService.getStudentsByGroupId(groupId)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de la récupération des étudiants.");
        console.error("Erreur lors de la récupération des étudiants:", error);
      });
  }, [groupId]);

  return (
    <div>
      <h2>
        Étudiants du groupe: {students.length > 0 ? students[0].groupName : ""}
      </h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div>
        {students.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.lastName}</td>
                  <td>{student.firstName}</td>
                  <td>{student.infoContacts.email}</td>
                  <td>{student.infoContacts.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Aucun étudiant trouvé pour ce groupe.</p>
        )}
      </div>
    </div>
  );
};

export default GroupStudents;
