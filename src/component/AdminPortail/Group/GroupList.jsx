import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteGroupModal from "./DeleteGroupModal";
import { deleteGroupById, getAllGroupes } from "../../../service/GroupsService";

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");

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

  const handleDeleteClick = (group) => {
    setSelectedGroup(group);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedGroup && selectedGroup.group_id) {
      deleteGroupById(selectedGroup.group_id)
        .then(() => {
          setGroups(
            groups.filter((group) => group.group_id !== selectedGroup.group_id)
          );
          setShowModal(false);
          setSelectedGroup(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the group!", error);
          setShowModal(false);
          setSelectedGroup(null);
        });
    } else {
      console.error("Selected group is not properly defined");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGroup(null);
  };

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

  return (
    <>
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
                <th className="fw-bold">Modifier</th>
                <th className="fw-bold">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {currentGroups.map((group) => (
                <tr key={group.group_id}>
                  <td>
                    <Link to={`/groups/${group.group_id}`}>
                      {group.nameGroup}
                    </Link>
                  </td>
                  <td>{group.level}</td>
                  <td>{group.schoolYear}</td>
                  <td className="text-center fs-3">
                    <i
                      className="fa-solid fa-pen-to-square text-primary"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                  <td className="text-center fs-3 text-danger">
                    <i
                      className="fa-solid fa-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteClick(group)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des groupes vide.</p>
        )}

        <DeleteGroupModal
          show={showModal}
          group={selectedGroup}
          onClose={handleCloseModal}
          onConfirm={handleDeleteConfirm}
        />
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

export default GroupList;
