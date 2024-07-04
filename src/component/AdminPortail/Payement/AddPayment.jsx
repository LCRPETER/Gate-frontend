import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createPayment } from "../../../service/Payment";

const AddPayment = () => {
  const { studentId } = useParams();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amountPay, setAmountPay] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "paymentMethod") setPaymentMethod(value);
    if (name === "amountPay") setAmountPay(value);
    if (name === "paymentDate") setPaymentDate(value);
  };

  const savePaymentForm = (e) => {
    e.preventDefault();

    if (!studentId) {
      setErrorMessage("Erreur: L'ID de l'étudiant est manquant.");
      return;
    }

    const payment = {
      student: { id: studentId },
      paymentMethod,
      amountPay,
      paymentDate,
    };

    createPayment(payment)
      .then((response) => {
        setSuccessMessage("Paiement ajouté avec succès !");
        setErrorMessage("");
        console.log(response.data);
        navigate(`/students/${studentId}`);
      })
      .catch((error) => {
        setSuccessMessage("");
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("Erreur lors de l'ajout du paiement");
        }
        console.error("Erreur lors de l'ajout du paiement", error);
      });
  };

  return (
    <div className="relative p-4">
      <button
        className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
        style={{ marginTop: "20px", top: "-50px" }}
        onClick={() => navigate(`/groups`)}
      >
        Retour
      </button>
      <div className="m-4 col-md-6 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Ajouter paiement
        </h2>
        {successMessage && (
          <div
            className="alert alert-success text-center"
            style={{ backgroundColor: "white", color: "green" }}
          >
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div
            className="alert alert-danger text-center"
            style={{ backgroundColor: "white", color: "red" }}
          >
            {errorMessage}
          </div>
        )}
        <div className="row">
          <div className="card">
            <div className="card-body">
              <form onSubmit={savePaymentForm}>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      className="form-control"
                      name="paymentMethod"
                      value={paymentMethod}
                      onChange={handleInputChange}
                      required
                      placeholder="Mode paiement"
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="number"
                      name="amountPay"
                      className="form-control"
                      value={amountPay}
                      onChange={handleInputChange}
                      required
                      placeholder="Montant"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="date"
                      className="form-control"
                      name="paymentDate"
                      value={paymentDate}
                      onChange={handleInputChange}
                      required
                      placeholder="Date de paiement"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mt-3 fs-6 d-flex align-items-center justify-content-center">
                    <button
                      type="submit"
                      className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
