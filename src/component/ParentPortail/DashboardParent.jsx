// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const DashboardParent = ({ handleViewChange, currentView }) => {
  const renderView = () => {
    const isActive = (view) => {
      return currentView === view ? "active" : "";
    };

    switch (currentView) {
      case "grades":
        return <div></div>;
      case "schedules":
        return <div></div>;
      case "absences":
        return <div></div>;
      case "payments":
        return <div></div>;
      default:
        return (
          <div
            className=""
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              height: "70vh",
            }}
          >
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div
                className={`h-25 dark-moderate-red rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "grades"
                )}`}
              >
                Notes
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("grades")}>
                  <i
                    className="fa-solid fa-book fs-1 bg-brown-beige"
                    style={{ cursor: "pointer", color: "black" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div
                className={`h-25 dark-moderate-red rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "schedules"
                )}`}
              >
                Emploi du Temps
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("schedules")}>
                  <i
                    className="fa-solid fa-calendar-days fs-1 bg-brown-beige"
                    style={{ cursor: "pointer", color: "black" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div
                className={`h-25 dark-moderate-red rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "absences"
                )}`}
              >
                Absences
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("absences")}>
                  <i
                    className="fa-solid fa-user-check fs-1 bg-brown-beige"
                    style={{ cursor: "pointer", color: "black" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div
                className={`h-25 dark-moderate-red rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "payments"
                )}`}
              >
                Paiements
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("payments")}>
                  <i
                    className="fa-solid fa-money-check-dollar fs-1 bg-brown-beige"
                    style={{ cursor: "pointer", color: "black" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  return <>{renderView()}</>;
};

export default DashboardParent;
