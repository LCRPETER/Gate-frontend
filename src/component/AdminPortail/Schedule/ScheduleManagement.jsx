import React, { useEffect, useState } from "react";
import GroupSchedule from "./GroupSchedule"; // Import the GroupSchedule component
import { getAllGroupes } from "../../../service/GroupsService";

const ScheduleManagement = () => {
  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null); // State to control the selected group

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchText(""); // Reset search text when showing input
    }
  };

  const groupsPerPage = 6;

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
    setCurrentPage(0); // Reset to first page on year change
  };

  const filteredGroups = selectedYear
    ? groups.filter((group) => group.schoolYear === selectedYear)
    : groups;

  const startIndex = currentPage * groupsPerPage;
  const currentGroups = filteredGroups.slice(
    startIndex,
    startIndex + groupsPerPage
  );

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  if (selectedGroup) {
    // If a group is selected, render the GroupSchedule component
    return <GroupSchedule groupId={selectedGroup.group_id} scheduleId={1} />; // Assuming scheduleId is 1 for demonstration
  }

  return (
    <>
      <div className="ps-4 pe-5 d-flex align-items-center justify-content-between">
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
      </div>
      <div className="container mt-1" style={{ width: "95%" }}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="w-50 d-flex">
            <label
              htmlFor="schoolYearSelect"
              className="form-label w-50 d-flex align-items-center p-2 fw-bold"
            >
              Année scolaire:
            </label>
            <select
              id="schoolYearSelect"
              className="form-select shadow"
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
          <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
            <button
              className="bg-primary text-light fw-semibold rounded-pill p-1"
              style={{ marginRight: "30px", width: "120px" }}
            >
              + Ajouter
            </button>

            {showSearch && (
              <input
                type="text"
                className="form-control"
                placeholder="Recherche..."
                style={{ width: "200px", marginLeft: "5px" }}
              />
            )}
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
              onClick={handleSearchToggle}
            >
              <i className="fa-solid fa-magnifying-glass fw-bold"></i>
            </div>
          </div>
        </div>
        <div className="text-teal fst-italic p-4">
          Choisis un groupe pour voir l'emploi du temps du groupe.
        </div>
        {currentGroups.length > 0 ? (
          <div className="d-flex flex-wrap ">
            {currentGroups.map((group) => (
              <div
                key={group.group_id}
                className="card m-2 shadow"
                style={{ width: "18rem" }}
                onClick={() => handleGroupClick(group)}
              >
                <div className="card-body hover-box-schedule">
                  <h5 className="card-title">{group.nameGroup}</h5>
                  <h6 className="card-subtitle mb-2">Niveau: {group.level}</h6>
                  <p className="card-text">
                    Année scolaire: {group.schoolYear}
                  </p>
                </div>
              </div>
            ))}
          </div>
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

export default ScheduleManagement;
