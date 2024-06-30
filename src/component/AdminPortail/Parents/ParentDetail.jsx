import React, { useEffect, useState } from "react";
import ParentService from "../../../service/ParentService";
import { useParams } from "react-router-dom";

const ParentDetail = () => {
  const { id } = useParams();
  const [parent, setParent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    ParentService.getParentById(id)
      .then((response) => {
        setParent(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the parent details!", error);
        setError("There was an error fetching the parent details.");
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!parent) {
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
          {parent.matricule}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Nom:</span> {parent.firstName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Prénom:</span> {parent.lastName}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Email:</span> {parent.email}
        </li>
        <li>
          <span className="fw-bolder lh-lg">Numero de téléphone:</span>
          {parent.phoneNumber}
        </li>
      </ul>
    </div>
  );
};

export default ParentDetail;
