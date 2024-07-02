import React from "react";
import { Link } from "react-router-dom";

const DashboardTeacher = ({ handleViewChange, currentView }) => {
  const renderView = () => {
    const isActive = (view) => {
      return currentView === view ? "active" : "";
    };

    switch (currentView) {
      case "schedules":
        return <div>schedules</div>;
      case "courses":
        return <div>courses</div>;
      case "evaluations":
        return <div>evaluations</div>;
      case "grades":
        return <div>grades</div>;
      case "attendance":
        return <div>attendance</div>;
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
                className={`h-25 bg-dark-blue rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
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
                className={`h-25 bg-dark-blue rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "courses"
                )}`}
              >
                Cours
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("courses")}>
                  <i
                    className="fa-solid fa-chalkboard fs-1 bg-brown-beige"
                    style={{ cursor: "pointer", color: "black" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div
                className={`h-25 bg-dark-blue rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "evaluations"
                )}`}
              >
                Évaluations
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("evaluations")}>
                  <i
                    className="fa-solid fa-file-alt fs-1 bg-brown-beige"
                    style={{ cursor: "pointer", color: "black" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div
                className={`h-25 bg-dark-blue rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "grades"
                )}`}
              >
                Notes
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("grades")}>
                  <i
                    className="fa-solid fa-graduation-cap fs-1 bg-brown-beige"
                    style={{ cursor: "pointer", color: "black" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0">
              <div
                className={`h-25 bg-dark-blue rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "attendance"
                )}`}
              >
                Présences
              </div>
              <div className="desaturated-dark-blue h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("attendance")}>
                  <i
                    className="fa-solid fa-user-check fs-1 bg-brown-beige"
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

export default DashboardTeacher;
