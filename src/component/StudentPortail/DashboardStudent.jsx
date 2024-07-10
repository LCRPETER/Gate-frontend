import React from "react";
import { Link } from "react-router-dom";
import StudentGrades from "./StudentGrades";

const DashboardStudent = ({ handleViewChange, currentView }) => {
  const renderView = () => {
    const isActive = (view) => {
      return currentView === view ? "active" : "";
    };

    switch (currentView) {
      case "personalInfo":
        return <div></div>;
      case "schedule":
        return <div></div>;
      case "grades":
        return <StudentGrades />;
      case "attendance":
        return <StudentAttendance />;
      case "paymentHistory":
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
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "personalInfo"
                )}`}
              >
                Information Personnelle
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("personalInfo")}>
                  <i
                    className="fa-solid fa-user fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "schedule"
                )}`}
              >
                Emploi du Temps
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("schedule")}>
                  <i
                    className="fa-solid fa-calendar-days fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "grades"
                )}`}
              >
                Notes
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("grades")}>
                  <i
                    className="fa-solid fa-book fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "evaluations"
                )}`}
              >
                Evaluations
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("evaluations")}>
                  <i
                    className="fa-solid fa-clipboard-check fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "absenceHistory"
                )}`}
              >
                Historique des Absences
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("attendance")}>
                  <i
                    className="fa-solid fa-calendar-times fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-orange-peel rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "paymentHistory"
                )}`}
              >
                Historique des Paiements
              </div>
              <div className="bg-Very-light-orange h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("paymentHistory")}>
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
