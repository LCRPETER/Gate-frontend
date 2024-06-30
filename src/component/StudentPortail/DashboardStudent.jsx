import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserManagement from "../AdminPortail/Users/UserManagement";

const DashboardStudent = ({ handleViewChange, currentView }) => {
  const renderView = () => {
    const isActive = (view) => {
      return currentView === view ? "active" : "";
    };

    switch (currentView) {
      case "users":
        return <UserManagement />;
      case "groups":
        return <div>Groupes</div>;
      case "subjects":
        return <div>Matières</div>;
      case "schedules":
        return <div>Emplois du temps</div>;
      case "courses":
        return <div>Cours</div>;
      case "payments":
        return <div>Règlement Paiement</div>;
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
                className={`h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "users"
                )}`}
              >
                Information personnelle
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("users")}>
                  <i
                    className="fa-solid fa-id-card fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center">
                Emplois du temps
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("groups")}>
                  <div className="w-100 bg-brown-beige rounded-1">
                    <div
                      className="icon-group m-auto"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fa-solid fa-calendar-days fs-1"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center">
                Notes
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("subjects")}>
                  <div
                    className="w-100 p-1 rounded-1 bg-brown-beige d-flex align-items-center "
                    style={{ cursor: "pointer" }}
                  >
                    <div className="h-25 d-flex align-items-center me-1">
                      <i className="fa-regular fa-clipboard fs-1"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center">
                Evaluation
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("schedules")}>
                  <i
                    className="fa-solid fa-chart-line fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center">
                Assiduite
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("assiduite")}>
                  <div
                    className="w-100 p-1 bg-brown-beige rounded-1 d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <i className="fa-solid fa-user-clock fs-1"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center">
                Paiement
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("payments")}>
                  <i
                    className="fa-solid fa-money-check-dollar fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
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

export default DashboardStudent;
