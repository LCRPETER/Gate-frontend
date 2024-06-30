import React, { useState } from "react";
import UserManagement from "../AdminPortail/Users/UserManagement";
import DashboardParent from "./DashboardParent";

const ParentPortail = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardParent />;
      case "users":
        return <UserManagement />;
      case "groups":
        return <div>Gérer groupes</div>;
      case "subjects":
        return <div>Gérer matières</div>;
      case "schedules":
        return <div>Gérer emplois du temps</div>;
      case "courses":
        return <div>Gérer cours</div>;
      case "payments":
        return <div>Gérer paiements des frais scolaire</div>;
      case "settings":
        return <div>Paramètre</div>;
      default:
        return <DashboardStudent />;
    }
  };

  return (
    <div className="grid-container" style={{ width: "100%", height: "100vh" }}>
      <div className="box-left dark-moderate-red  rounded-0 shadow rounded">
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
              className={`w-100 p-1 rounded-1 hover-box-teacher m-auto ${
                currentView === "dashboard" ? "active-teacher" : ""
              }`}
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
            onClick={() => handleViewChange("users")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher m-auto ${
                currentView === "users" ? "active-teacher" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-users fs-6"></i> Utilisateurs
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
            onClick={() => handleViewChange("groups")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${
                currentView === "groups" ? "active-teacher" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="icon-group">
                <i className="fa-solid fa-user-graduate"></i>
                <i className="fa-solid fa-user-graduate"></i>
                <i className="fa-solid fa-user-graduate"></i>
              </div>
              <div style={{ marginLeft: "-7px" }}>Groupes</div>
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
            onClick={() => handleViewChange("subjects")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${
                currentView === "subjects" ? "active-teacher" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="h-25 d-flex align-items-center me-1">
                <div>
                  <i className="fa-solid fa-book fs-6"></i>
                </div>
                <div style={{ marginTop: "-5px", marginLeft: "-3px" }}>
                  <i className="fa-solid fa-book fs-6"></i>
                </div>
              </div>
              <div>Matières</div>
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
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${
                currentView === "schedules" ? "active-teacher" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-calendar-days fs-5"></i> Emplois du
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
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("courses")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher d-flex align-items-center m-auto ${
                currentView === "courses" ? "active-teacher" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div>
                <i className="fa-solid fa-chalkboard fs-5"></i>
              </div>
              <div
                className="me-1"
                style={{ marginBottom: "-5px", marginLeft: "-22px" }}
              >
                <i className="fa-solid fa-users fs-6"></i>
              </div>
              <div>Cours</div>
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
            onClick={() => handleViewChange("payments")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-teacher m-auto ${
                currentView === "payments" ? "active-teacher" : ""
              }`}
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
              className={`w-100 p-1 rounded-1 hover-box-teacher m-auto ${
                currentView === "settings" ? "active-teacher" : ""
              }`}
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
            <div className="text-center" style={{ color: "#76453b" }}>
              <i className="fa-solid fa-user fs-5"></i>{" "}
            </div>
            <div className="fs-6 fw-semibold">Profil</div>
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
    </div>
  );
};

export default ParentPortail;
