import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../../../service/UserService";

const UserDetail = ({ selectedUser }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      UserService.getUserById(id)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the user details!", error);
          setError("There was an error fetching the user details.");
        });
    }
  }, [id, selectedUser]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
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
          <span className="fw-bolder lh-lg">Matricule:</span> {user.matricule}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Nom:</span> {user.lastName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Prénom:</span> {user.firstName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Role:</span> {user.name}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Genre:</span> {user.gender}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Email:</span> {user.email}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Numero de téléphone:</span>{" "}
          {user.phoneNumber}
        </li>
      </ul>
    </div>
  );
};

export default UserDetail;
