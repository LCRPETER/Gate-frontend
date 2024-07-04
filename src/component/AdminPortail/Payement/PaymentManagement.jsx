import React, { useState } from "react";
import GroupSelectionForPayment from "./GroupSelectionForPayment";
import StudentListForPayment from "./StudentListForPayment";
import AddPayment from "./AddPayment";
import { useParams } from "react-router-dom";

const PaymentManagement = () => {
  const { groupId, studentId } = useParams();
  const [currentView, setCurrentView] = useState("groups");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "groups":
        return <GroupSelectionForPayment handleViewChange={handleViewChange} />;
      case "students":
        return (
          <StudentListForPayment
            groupId={groupId}
            handleViewChange={handleViewChange}
          />
        );
      case "addPayment":
        return <AddPayment studentId={studentId} />;
      default:
        return <GroupSelectionForPayment handleViewChange={handleViewChange} />;
    }
  };

  return <>{renderView()}</>;
};

export default PaymentManagement;
