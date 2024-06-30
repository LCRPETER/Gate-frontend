import React, { useState } from "react";
import { createStudent } from "../../../service/StudentService";

const CreateStudent = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    group_id: "", // Assurez-vous que ce champ correspond à votre modèle backend
    role: { name: "STUDENT" },
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createStudent(student);
      setMessage(response.data);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
      } else {
        setMessage("Erreur lors de la création de l'étudiant.");
      }
    }
  };

  return (
    <div>
      <h2>Créer un étudiant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Prénom</label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={student.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ID du groupe</label>
          <input
            type="text"
            name="group_id"
            value={student.group_id}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Créer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateStudent;
