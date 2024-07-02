import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteParentModal from "./DeleteParentModal";
import {
  deleteParentById,
  getAllParents,
} from "../../../service/ParentService";

const ParentList = () => {
  const [parents, setParents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const parentsPerPage = 3;

  useEffect(() => {
    getAllParents()
      .then((response) => {
        setParents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the parents!", error);
      });
  }, []);

  const handleDeleteClick = (parent) => {
    setSelectedParent(parent);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedParent) {
      deleteParentById(selectedParent.user_id)
        .then(() => {
          setParents(
            parents.filter(
              (parent) => parent.user_id !== selectedParent.user_id
            )
          );
          setShowModal(false);
          setSelectedParent(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the parent!", error);
          setShowModal(false);
          setSelectedParent(null);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedParent(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * parentsPerPage < parents.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * parentsPerPage;
  const currentParents = parents.slice(startIndex, startIndex + parentsPerPage);

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
        {parents.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Matricule</th>
                <th className="fw-bold">Nom</th>
                <th className="fw-bold">Prénom</th>
                <th className="fw-bold">Modifier</th>
                <th className="fw-bold">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {currentParents.map((parent) => (
                <tr key={parent.user_id}>
                  <td>
                    <Link to={`/parents/${parent.user_id}`}>
                      {parent.matricule}
                    </Link>
                  </td>
                  <td>{parent.lastName}</td>
                  <td>{parent.firstName}</td>
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
                      onClick={() => handleDeleteClick(parent)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des parents vide.</p>
        )}

        <DeleteParentModal
          show={showModal}
          user={selectedParent}
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
          {currentPage + 1}/{Math.ceil(parents.length / parentsPerPage)}
        </div>
      </div>
    </>
  );
};

export default ParentList;
