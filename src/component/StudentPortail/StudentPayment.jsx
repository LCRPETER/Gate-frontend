import React, { useEffect, useState } from "react";
import { getPaymentByStudentMatricule } from "../../service/Student-portail/StudentPayment";

const StudentPayment = ({ studentMatricule }) => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPaymentByStudentMatricule(studentMatricule);

        setPayments(response.data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (studentMatricule) {
      fetchData();
    }
  }, [studentMatricule]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching payments: {error.message}</div>;
  }

  return (
    <div>
      <table
        className="table table-striped border border-start-0 border-end-0 w-100"
        style={{ marginTop: "-12rem" }}
      >
        <thead>
          <tr className="text-center border-secondary border-start-0 border-end-0 h-12 fw-bolder">
            <th>Mode de paiement</th>
            <th>Montant de paiement</th>
            <th>Date de paiement</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.payment_id}
              className="border-secondary border-start-0 border-end-0 h-12 text-center"
            >
              <td>{payment.paymentMethod}</td>
              <td>{payment.amountPay}</td>
              <td>{payment.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPayment;
