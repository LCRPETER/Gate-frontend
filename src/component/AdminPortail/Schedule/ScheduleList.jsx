import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteSchedulesById,
  getAllSchedulesSortedByDate,
} from "../../../service/ScheduleService";
import "tw-elements";
import DeleteScheduleModal from "./DeleteScheduleModal";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const schedulesPerPage = 5;

  useEffect(() => {
    getAllSchedulesSortedByDate()
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the schedules!", error);
      });
  }, []);

  const handleDeleteClick = (schedule) => {
    setSelectedSchedule(schedule);
    setShowModal(true);
  };
  const handleDeleteConfirm = () => {
    if (selectedSchedule) {
      deleteSchedulesById(selectedSchedule.schedule_id)
        .then(() => {
          setSchedules(
            schedules.filter(
              (schedule) =>
                schedule.schedule_id !== selectedSchedule.schedule_id
            )
          );
          setShowModal(false);
          setSelectedSchedule(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the schedule!", error);
          setShowModal(false);
          setSelectedSchedule(null);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSchedule(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * schedulesPerPage < schedules.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * schedulesPerPage;
  const currentSchedules = schedules.slice(
    startIndex,
    startIndex + schedulesPerPage
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
        {currentSchedules.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Nom du Groupe</th>
                <th className="fw-bold">Niveau</th>
                <th className="fw-bold">Description</th>
                <th className="fw-bold">Date de début</th>
                <th className="fw-bold">Date de fin</th>
                <th className="fw-bold">Modifier</th>
                <th className="fw-bold">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {currentSchedules.map((schedule) => (
                <tr key={schedule.schedule_id}>
                  <td>
                    <Link to={`/schedules/${schedule.schedule_id}`}>
                      {schedule.groupName}
                    </Link>
                  </td>
                  <td>{schedule.groupLevel}</td>
                  <td>{schedule.description}</td>
                  <td>{schedule.startDate}</td>
                  <td>{schedule.endDate}</td>
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
                      onClick={() => handleDeleteClick(schedule)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des emplois du temps vide.</p>
        )}
        <DeleteScheduleModal
          show={showModal}
          schedule={selectedSchedule}
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
          {currentPage + 1}/{Math.ceil(schedules.length / schedulesPerPage)}
        </div>
      </div>
    </>
  );
};

export default ScheduleList;
