// src/components/StudentDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../../service/StudentService";

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStudentById(id)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the student details!",
          error
        );
        setError("There was an error fetching the student details.");
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="p-6 " style={{ width: "25%", minWidth: "25%" }}>
        <li>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle mb-6"
            style={{ width: "150px" }}
            alt="Avatar"
          />
        </li>
        <li>
          <span className="fw-bolder lh-lg">Matricule:</span>
          {student.matricule}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Nom:</span> {student.firstName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Prénom:</span> {student.lastName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Genre:</span> {student.gender}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Prénom:</span> {student.birth_date}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Lieu de naissance:</span>{" "}
          {student.birthplace}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Ville:</span> {student.city}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Rue:</span> {student.street}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Code postale:</span>{" "}
          {student.zipCode}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Groupe:</span> {student.nameGroupe}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Niveau:</span> {student.level}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Email:</span> {student.email}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Numero de téléphone:</span>{" "}
          {student.phoneNumber}
        </li>
      </ul>
    </div>
  );
};

export default StudentDetail;
