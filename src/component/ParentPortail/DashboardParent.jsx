import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserManagement from "../AdminPortail/Users/UserManagement";

const DashboardParent = ({ handleViewChange, currentView }) => {
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
                className={`h-25 dark-moderate-red  rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "personal-info"
                )}`}
              >
                Utilisateur
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("users")}>
                  <i
                    className="fa-solid fa-users fs-1 "
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 dark-moderate-red  rounded-0 text-light d-flex align-items-center justify-content-center">
                Groupes
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("groups")}>
                  <div className="w-100  rounded-1">
                    <div
                      className="icon-group m-auto"
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className="fa-solid fa-user-graduate fs-4"
                        style={{ marginLeft: "-20px" }}
                      ></i>
                      <i
                        className="fa-solid fa-user-graduate fs-4"
                        style={{ marginRight: "-20px" }}
                      ></i>
                      <i
                        className="fa-solid rounded-circle fa-user-graduate fs-4"
                        style={{
                          marginTop: "-10px",
                          marginRight: "-2px",
                          padding: "0.7px",
                        }}
                      ></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 dark-moderate-red  rounded-0 text-light d-flex align-items-center justify-content-center">
                Matières
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("subjects")}>
                  <div
                    className="w-100 p-1 rounded-1  d-flex align-items-center "
                    style={{ cursor: "pointer" }}
                  >
                    <div className="h-25 d-flex align-items-center me-1">
                      <div>
                        <i className="fa-solid fa-book fs-2"></i>
                      </div>
                      <div style={{ marginTop: "-8px", marginLeft: "-10px" }}>
                        <i className="fa-solid fa-book fs-2"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 dark-moderate-red  rounded-0 text-light d-flex align-items-center justify-content-center">
                Emploi du Temps
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("schedules")}>
                  <i
                    className="fa-solid fa-calendar-days fs-1 "
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 dark-moderate-red  rounded-0 text-light d-flex align-items-center justify-content-center">
                Cours
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("courses")}>
                  <div
                    className="w-100 p-1  rounded-1 d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <i className="fa-solid fa-chalkboard fs-1"></i>
                    </div>
                    <div
                      className="me-1"
                      style={{ marginTop: "20px", marginLeft: "-40px" }}
                    >
                      <i className="fa-solid fa-users rounded-circle fs-3"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div className="h-25 dark-moderate-red  rounded-0 text-light d-flex align-items-center justify-content-center">
                Règlement Paiement
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("payments")}>
                  <i
                    className="fa-solid fa-money-check-dollar fs-1 "
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

export default DashboardParent;
