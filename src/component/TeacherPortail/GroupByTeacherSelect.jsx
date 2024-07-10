import React, { useEffect, useState } from "react";
import { getGroupsByTeacher } from "../../service/Teacher-portail/GroupsByTeacher";

const GroupByTeacherSelect = ({ teacherId, onSelectGroup }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGroupsByTeacher(teacherId);
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    if (teacherId) {
      fetchData();
    }
  }, [teacherId]);

  return (
    <div>
      <h2>Groups for Teacher ID: {teacherId}</h2>
      <ul>
        {groups.map((group) => (
          <li
            key={group.group_id}
            onClick={() => onSelectGroup(group.group_id)}
          >
            <strong>Group ID:</strong> {group.group_id}
            <br />
            <strong>Name:</strong> {group.nameGroup}
            <br />
            <strong>Level:</strong> {group.level}
            <br />
            <strong>School Year:</strong> {group.schoolYear}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupByTeacherSelect;
