import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeacherService from "../../../service/TeacherService";

const TeacherDetail = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    TeacherService.getTeacherById(id)
      .then((response) => {
        setTeacher(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the teacher details!",
          error
        );
        setError("There was an error fetching the teacher details.");
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!teacher) {
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
          <span className="fw-bolder lh-lg">Matricule: </span>
          {teacher.matricule}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Nom: </span> {teacher.firstName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Prénom: </span> {teacher.lastName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Email: </span> {teacher.email}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Numero de téléphone: </span>
          {teacher.phoneNumber}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Matière Enseigné: </span>
          {teacher.nameSubject}
        </li>
      </ul>
    </div>
  );
};

export default TeacherDetail;
