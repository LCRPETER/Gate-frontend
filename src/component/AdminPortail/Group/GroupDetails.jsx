import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GroupService from "../../../service/GroupsService";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchGroupById = async () => {
      try {
        const data = await GroupService.getGroupById(id);
        setGroup(data);
      } catch (error) {
        console.error("Error fetching group details:", error);
      }
    };

    fetchGroupById();
  }, [id]);

  return (
    <div>
      <h2>Détails du groupe</h2>
      {group ? (
        <div>
          <p>Nom du groupe : {group.nameGroup}</p>
          <p>Niveau : {group.level}</p>
          <p>Année scolaire : {group.schoolYear}</p>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default GroupDetails;
