import React, { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import UserManagement from "./Users/UserManagement";
import GroupManagement from "./Group/GroupManagement";
import SubjectManagement from "./Subject/SubjectManagement";
import CourseManagement from "./Course/CourseManagement";
import ScheduleManagement from "./Schedule/ScheduleManagement";

const AdminManagement = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const isActive = (view) => {
    return currentView === view ? "active" : "";
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <Dashboard
            handleViewChange={handleViewChange}
            currentView={currentView}
          />
        );
      case "users":
        return <UserManagement />;
      case "groups":
        return <GroupManagement />;
      case "subjects":
        return <SubjectManagement />;
      case "schedules":
        return <ScheduleManagement />;
      case "courses":
        return <CourseManagement />;
      case "payments":
        return <div>payments</div>;
      case "settings":
        return <div>Paramètre</div>;
      default:
        return (
          <Dashboard
            handleViewChange={handleViewChange}
            currentView={currentView}
          />
        );
    }
  };

  return (
    <div className="grid-container" style={{ width: "100%", height: "100vh" }}>
      <div className="box-left bg-teal rounded-0 shadow rounded">
        <div
          className="w-100 m-auto p-2 position-relative"
          style={{ height: "170px" }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <div className="image-form-profil">
              <img src="../../../asset/images/piere.png" alt="Avatar" />
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
              className={`w-100 p-1 rounded-1 hover-box m-auto  ${isActive(
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
            onClick={() => handleViewChange("users")}
          >
            <p
              className={`w-100 p-1 rounded-1 hover-box m-auto ${isActive(
                "users"
              )}`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-users fs-6"></i> Utilisateurs
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
            onClick={() => handleViewChange("groups")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box d-flex align-items-center m-auto ${isActive(
                "groups"
              )}`}
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
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center "
            style={{ height: "45px" }}
            onClick={() => handleViewChange("subjects")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box d-flex align-items-center m-auto ${isActive(
                "subjects"
              )}`}
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
            onClick={() => handleViewChange("courses")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box d-flex align-items-center m-auto ${isActive(
                "courses"
              )}`}
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
            <div className="text-center">
              <i className="fa-solid fa-user fs-5 bg-brown-beige"></i>{" "}
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

export default AdminManagement;
