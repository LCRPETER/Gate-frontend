import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteScheduleModal = ({ show, schedule, onClose, onConfirm }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation de suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Êtes-vous sûr de vouloir supprimer l'emploi du temps :{" "}
        {schedule && `${schedule.schedule_id}`}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Annuler
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Supprimer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteScheduleModal;
