import React, { useState } from "react";
import DashboardTeacher from "./DashboardTeacher";
import Logout from "../Logout/Logout";

const TeacherPortail = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const isActive = (view) => {
    return currentView === view ? "active" : "";
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <DashboardTeacher
            handleViewChange={handleViewChange}
            currentView={currentView}
          />
        );
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
      case "logout":
        return <Logout />;
      default:
        return (
          <DashboardTeacher
            handleViewChange={handleViewChange}
            currentView={currentView}
          />
        );
    }
  };

  return (
    <div className="grid-container" style={{ width: "100%", height: "100vh" }}>
      <div className="box-left bg-dark-blue rounded-0 shadow rounded">
        <div
          className="w-100 m-auto p-2 position-relative"
          style={{ height: "170px" }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <div className="image-form-profil">
              <img src="../../../public/asset/images/piere.png" alt="Avatar" />
            </div>
          </div>

          <div className="d-flex align-items-center text-light justify-content-center fw-semibold">
            LCR PETER
          </div>
          <span
            className="position-absolute shadow-sm"
            style={{
              width: "100%",
              height: "1px",
              left: "50%",
              top: "100%",
              transform: "translate(-50%)",
              backgroundColor: "rgba(148, 147, 147, 0.568)",
            }}
          ></span>
        </div>
        <div className="h-75 w-100">
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("dashboard")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher m-auto ${isActive(
                "dashboard"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-house fs-6"></i> Tableau de bord
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("schedules")}
          >
            <p
              className={`w-100 p-1 rounded-1 hover-box-teacher m-auto ${isActive(
                "schedules"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-calendar-days fs-6 me-1"></i>
              Emploi du temps
            </p>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("courses")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${isActive(
                "courses"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-chalkboard fs-5 me-1"></i>
              Cours
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center "
            style={{ height: "45px" }}
            onClick={() => handleViewChange("evaluations")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${isActive(
                "evaluations"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-file-alt fs-6"></i>
              <span style={{ marginLeft: "7px" }}>Evaluations</span>
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center "
            style={{ height: "45px" }}
            onClick={() => handleViewChange("grades")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${isActive(
                "grades"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-graduation-cap fs-6 me-1"></i>
              Notes
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center "
            style={{ height: "45px" }}
            onClick={() => handleViewChange("attendance")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${isActive(
                "attendance"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-user-check fs-6"></i>
              <span style={{ marginLeft: "7px" }}>Assiduité</span>
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
        </div>
      </div>
      <div className="box-right p-3 position-relative rounded-0 d-flex align-items-center justify-content-between">
        <div className="fs-2 fw-semibold">Bienvenue dans votre Portail</div>
        <div className="p-2 fw-semibold">
          <div className="" style={{ cursor: "pointer" }}>
            <div className="text-center ">
              <i
                className="fa-solid fa-arrow-right-from-bracket fs-4 text-teal"
                onClick={handleLogoutClick}
              ></i>
            </div>
          </div>
        </div>
        <span
          className="position-absolute bg-secondary shadow-sm"
          style={{
            width: "96%",
            height: "3.5px",
            left: "50%",
            top: "100%",
            transform: "translate(-50%)",
          }}
        ></span>
      </div>
      <div className="box-right-center rounded-0">{renderView()}</div>
      {showLogoutModal && <Logout onClose={closeLogoutModal} />}
    </div>
  );
};

export default TeacherPortail;
