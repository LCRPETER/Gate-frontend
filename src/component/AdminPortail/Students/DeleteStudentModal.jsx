import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteStudentModal = ({ show, student, onClose, onConfirm }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation de suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Êtes-vous sûr de vouloir supprimer l'étudiant{" "}
        {student && `${student.firstName} ${student.lastName}`}?
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

export default DeleteStudentModal;
