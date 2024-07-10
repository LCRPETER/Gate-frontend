import React, { useState } from "react";
import DashboardTeacher from "./DashboardTeacher";
import Logout from "../Logout/Logout";
import GroupByTeacherSelect from "./GroupByTeacherSelect";
import AttendanceManagement from "./AttendenceMagement";
import Attendance from "./Attendance";

const TeacherPortail = ({ id }) => {
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
        return (
          <GroupByTeacherSelect
            handleViewChange={handleViewChange}
            teacherId={id}
          />
        ); // Add this line
      case "courses":
        return <Attendance />;
      case "evaluations":
        return <div>evaluations</div>;
      case "grades":
        return <div>grades</div>;
      case "attendance":
        return <AttendanceManagement />;
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
              <img src="../../../public/asset/images/moise.jpg" alt="Avatar" />
            </div>
          </div>

          <div className="d-flex align-items-center text-light justify-content-center fw-semibold">
            Moise Lokoua
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
        <div className="text-uppercase fw-bold fs-5 text-dark-blue">
          Accueil
        </div>
        <div className="icon-logout">
          <i
            className="fa-solid fa-arrow-right-from-bracket fs-4"
            onClick={handleLogoutClick}
          ></i>
        </div>
        {showLogoutModal && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Déconnexion</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeLogoutModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Voulez-vous vraiment vous déconnecter ?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeLogoutModal}
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleViewChange("logout")}
                  >
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="box-content-teacher">{renderView()}</div>
    </div>
  );
};

export default TeacherPortail;
