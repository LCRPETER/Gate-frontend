import React, { useState } from "react";
import DashboardParent from "./DashboardParent";
import Logout from "../Logout/Logout";

const ParentPortail = () => {
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
          <DashboardParent
            handleViewChange={handleViewChange}
            currentView={currentView}
          />
        );
      case "grades":
        return <div>Paramètre</div>;
      case "schedules":
        return <div>Paramètre</div>;
      case "absences":
        return <div>Paramètre</div>;
      case "payments":
        return <div>Paramètre</div>;
      case "logout":
        return <Logout />;
      default:
        return (
          <DashboardParent
            handleViewChange={handleViewChange}
            currentView={currentView}
          />
        );
    }
  };

  return (
    <div className="grid-container" style={{ width: "100%", height: "100vh" }}>
      <div className="box-left dark-moderate-red rounded-0 shadow rounded">
        <div
          className="w-100 m-auto p-2 position-relative"
          style={{ height: "170px" }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <div className="image-form-profil">
              <img src="../../../public/asset/images/walid.jpg" alt="Avatar" />
            </div>
          </div>

          <div className="d-flex align-items-center text-light justify-content-center fw-semibold">
            Walid
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
              className={`w-100 p-1 rounded-1 hover-box m-auto ${isActive(
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
            onClick={() => handleViewChange("grades")}
          >
            <p
              className={`w-100 p-1 rounded-1 hover-box m-auto ${isActive(
                "grades"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-book fs-6"></i> Notes
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
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center "
            style={{ height: "45px" }}
            onClick={() => handleViewChange("schedules")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box d-flex align-items-center m-auto ${isActive(
                "schedules"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-calendar-days fs-5 me-1"></i> Emplois du
              temps
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
            onClick={() => handleViewChange("absences")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box d-flex align-items-center m-auto ${isActive(
                "absences"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-user-check fs-5 me-1"></i> Absences
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
            onClick={() => handleViewChange("payments")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box m-auto ${isActive(
                "payments"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-money-check-dollar fs-5"></i> Paiements
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
            className="mb-2 text-light ps-3 pe-4 d-flex align-items-center "
            style={{ height: "45px" }}
            onClick={() => handleViewChange("settings")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box m-auto ${isActive(
                "settings"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-gear fs-5"></i> Paramètre
            </div>
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

export default ParentPortail;
