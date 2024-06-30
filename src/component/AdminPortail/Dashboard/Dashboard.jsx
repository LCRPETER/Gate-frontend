import React from "react";
import { Link } from "react-router-dom";
import UserManagement from "../Users/UserManagement";
import GroupManagement from "../Group/GroupManagement";
import SubjectManagement from "../Subject/SubjectManagement";
import CourseManagement from "../Course/CourseManagement";

const Dashboard = ({ handleViewChange, currentView }) => {
  const renderView = () => {
    const isActive = (view) => {
      return currentView === view ? "active" : "";
    };

    switch (currentView) {
      case "users":
        return <UserManagement />;
      case "groups":
        return <GroupManagement />;
      case "subjects":
        return <SubjectManagement />;
      case "schedules":
        return <div>Emplois du temps</div>;
      case "courses":
        return <CourseManagement />;
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
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={` h-25 bg-teal rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "users"
                )}`}
              >
                Utilisateur
              </div>
              <div className="bg-beige h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("users")}>
                  <i
                    className="fa-solid fa-users fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-teal rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "groups"
                )}`}
              >
                Groupes
              </div>
              <div className="bg-beige h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("groups")}>
                  <div className="w-100 bg-brown-beige rounded-1">
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
                        className="fa-solid bg-beige rounded-circle fa-user-graduate fs-4"
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
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-teal rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "subjects"
                )}`}
              >
                Matières
              </div>
              <div className="bg-beige h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("subjects")}>
                  <div
                    className="w-100 p-1 rounded-1 bg-brown-beige d-flex align-items-center "
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
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-teal rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "schedules"
                )}`}
              >
                Emploi du Temps
              </div>
              <div className="bg-beige h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("schedules")}>
                  <i
                    className="fa-solid fa-calendar-days fs-1 bg-brown-beige"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-teal rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "courses"
                )}`}
              >
                Cours
              </div>
              <div className="bg-beige h-75 d-flex align-items-center justify-content-center">
                <Link to="#" onClick={() => handleViewChange("courses")}>
                  <div
                    className="w-100 p-1 bg-brown-beige rounded-1 d-flex align-items-center"
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
            <div className="bg-light mini-box shadow-sm m-auto rounded-0 ">
              <div
                className={`h-25 bg-teal rounded-0 text-light d-flex align-items-center justify-content-center ${isActive(
                  "payments"
                )}`}
              >
                Règlement Paiement
              </div>
              <div className="bg-beige h-75 d-flex align-items-center justify-content-center">
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

export default Dashboard;
