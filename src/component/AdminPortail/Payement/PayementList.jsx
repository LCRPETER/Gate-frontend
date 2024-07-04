import React, { useEffect, useState } from "react";
import "tw-elements";
import { getAllPayments } from "../../../service/Payment";
import DeletePaymentModal from "./DeletePaymentModal";

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const paymentPerPage = 4;

  useEffect(() => {
    getAllPayments()
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the payments!", error);
      });
  }, []);

  const handleDeleteClick = (payment) => {
    setSelectedPayment(payment);
    setShowModal(true);
  };
  const handleDeleteConfirm = () => {
    if (selectedPayment) {
      deletePaymentsById(selectedPayment.payment_id)
        .then(() => {
          setPayments(
            payments.filter(
              (payment) => payment.payment_id !== selectedPayment.payment_id
            )
          );
          setShowModal(false);
          setSelectedPayment(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the payment!", error);
          setShowModal(false);
          setSelectedPayment(null);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPayment(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * paymentPerPage < payments.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * paymentPerPage;
  const currentPayments = payments.slice(
    startIndex,
    startIndex + paymentPerPage
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
        {currentPayments.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Etudiant</th>
                <th className="fw-bold">Mode de paiement</th>
                <th className="fw-bold">Montant</th>
                <th className="fw-bold">Date</th>
                <th className="fw-bold">Modifier</th>
                <th className="fw-bold">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {currentPayments.map((payment) => (
                <tr key={payment.payment_id}>
                  <td>{payment.studentFullName}</td>
                  <td>{payment.paymentMethod}</td>
                  <td>{payment.amountPay}</td>
                  <td>{payment.paymentDate}</td>
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
                      onClick={() => handleDeleteClick(payment)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des paiements vide.</p>
        )}
        <DeletePaymentModal
          show={showModal}
          payment={selectedPayment}
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
          {currentPage + 1}/{Math.ceil(payments.length / paymentPerPage)}
        </div>
      </div>
    </>
  );
};
export default PaymentList;
