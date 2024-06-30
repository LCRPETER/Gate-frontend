import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteTeacherModal = ({ show, teacher, onClose, onConfirm }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation de suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Êtes-vous sûr de vouloir supprimer l'enseignant{" "}
        {teacher && `${teacher.firstName} ${teacher.lastName}`}?
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-secondary" variant="secondary" onClick={onClose}>
          Annuler
        </Button>
        <Button className="bg-danger" variant="danger" onClick={onConfirm}>
          Supprimer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTeacherModal;
