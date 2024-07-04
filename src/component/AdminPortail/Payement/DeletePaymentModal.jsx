import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeletePaymentModal = ({ show, payement, onClose, onConfirm }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation de suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Êtes-vous sûr de vouloir supprimer le paiement :{" "}
        {payement && `${payement.payement_id}`}?
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-secondary" variant="secondary" onClick={onClose}>
          Annuler
        </Button>
        <Button className="bg-teal" variant="danger" onClick={onConfirm}>
          Supprimer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePaymentModal;
