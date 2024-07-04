import React, { useEffect, useState } from "react";
import { getAllGroupes } from "../../../service/GroupsService";
import { useNavigate } from "react-router-dom";

const GroupSelectionForPayment = ({ handleViewChange }) => {
  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();
  const groupsPerPage = 3;

  useEffect(() => {
    getAllGroupes()
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the groups!", error);
      });
  }, []);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * groupsPerPage < filteredGroups.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setCurrentPage(0);
  };

  const filteredGroups = selectedYear
    ? groups.filter((group) => group.schoolYear === selectedYear)
    : groups;

  const startIndex = currentPage * groupsPerPage;
  const currentGroups = filteredGroups.slice(
    startIndex,
    startIndex + groupsPerPage
  );

  const handleGroupClick = (groupId) => {
    navigate(`/groups/${groupId}/students`);
    handleViewChange("students");
  };

  return (
    <>
      <h2 className=" fs-5 text-teal text-center">
        Selectionner un groupe pour gerer les payments des étudiants
      </h2>
      <div className="p-2 ps-4">
        <i
          className="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handlePreviousPage}
        ></i>
        <i
          className="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handleNextPage}
        ></i>
      </div>
      <div className="container mt-1" style={{ width: "95%" }}>
        <div className="mb-3">
          <label htmlFor="schoolYearSelect" className="form-label">
            Année scolaire:
          </label>
          <select
            id="schoolYearSelect"
            className="form-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">Toutes les années</option>
            {Array.from(new Set(groups.map((group) => group.schoolYear))).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
        </div>
        {currentGroups.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Nom groupe</th>
                <th className="fw-bold">Niveau</th>
                <th className="fw-bold">Année scolaire</th>
              </tr>
            </thead>
            <tbody>
              {currentGroups.map((group) => (
                <tr key={group.group_id}>
                  <td
                    className="list-group-item"
                    onClick={() => handleGroupClick(group.group_id)}
                    style={{ cursor: "pointer" }}
                  >
                    {group.nameGroup}
                  </td>
                  <td>{group.level}</td>
                  <td>{group.schoolYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des groupes vide.</p>
        )}
      </div>
      <div className="ps-4 pe-5 d-flex align-items-center justify-content-between">
        <div>
          <i
            className="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handlePreviousPage}
          ></i>
          <i
            className="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handleNextPage}
          ></i>
        </div>
        <div>
          {currentPage + 1}/{Math.ceil(filteredGroups.length / groupsPerPage)}
        </div>
      </div>
    </>
  );
};

export default GroupSelectionForPayment;
