import React, { useState, useEffect } from "react";
import GroupService from "../../../service/GroupsService";

const GroupSelector = ({ groupId }) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    GroupService.getStudentsByGroupId(groupId)
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des groupes:", error);
      });
  }, []);

  const handleGroupChange = (e) => {
    const groupId = e.target.value;
    setSelectedGroup(groupId);
    onGroupSelect(groupId);
  };

  return (
    <div className="form-group">
      <label htmlFor="groupSelect">Sélectionner un groupe :</label>
      <select
        id="groupSelect"
        className="form-control"
        value={selectedGroup}
        onChange={handleGroupChange}
      >
        <option value="">Choisir un groupe</option>
        {groups.map((group) => (
          <option key={group.group_id} value={group.group_id}>
            {group.nameGroup} - {group.level}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GroupSelector;
