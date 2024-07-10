import React, { useEffect, useState } from "react";
import { getStudentByMatricule } from "../../service/Student-portail/StudentPersonalInfo";

const StudentInfoPersonal = ({ studentMatricule }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStudentByMatricule(studentMatricule);
        console.log("API Response:", response);

        if (response.data) {
          setStudent(response.data);
        } else {
          setStudent(null);
        }
      } catch (error) {
        console.error("Error fetching student details:", error);
        setStudent(null);
      }
    };

    if (studentMatricule) {
      fetchData();
    }
  }, [studentMatricule]);

  return (
    <div className="card w-50 m-4">
      {student ? (
        <div className="p-6 d-flex">
          <ul>
            <li>
              <img
                src="../../../public/asset/images/eder.png"
                className="rounded-circle mb-6"
                style={{ width: "150px" }}
                alt="Avatar"
              />
            </li>
            <li>
              <span className="fw-bolder lh-lg">Matricule:</span>{" "}
              {student.matricule}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Nom:</span> {student.firstName}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Prénom:</span>{" "}
              {student.lastName}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Genre:</span> {student.gender}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Date de naissance:</span>{" "}
              {student.birth_date}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Lieu de naissance:</span>{" "}
              {student.birthplace}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Ville:</span> {student.city}
            </li>
          </ul>
          <ul>
            <li>
              <span className="fw-bolder lh-lg">Rue:</span> {student.street}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Code postal:</span>{" "}
              {student.zipCode}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Groupe:</span>{" "}
              {student.nameGroupe}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Niveau:</span> {student.level}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Email:</span> {student.email}
            </li>
            <li>
              <span className="fw-bolder lh-lg">Numéro de téléphone:</span>{" "}
              {student.phoneNumber}
            </li>
          </ul>
        </div>
      ) : (
        <p>Aucun étudiant trouvé pour ce matricule.</p>
      )}
    </div>
  );
};

export default StudentInfoPersonal;
