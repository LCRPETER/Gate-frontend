import React, { useState } from "react";
import "tw-elements";
import UserList from "./UserList";
import StudentManagement from "../Students/StudentManagement";
import TeacherManagement from "../Teachers/TeacherManagement";
import ParentManagement from "../Parents/ParentManagement";

const UserManagement = () => {
  const [currentView, setCurrentView] = useState("users");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };
  const handleFocus = (e) => {
    e.target.classList.add("focused");
  };

  const handleBlur = (e) => {
    e.target.classList.remove("focused");
  };

  const renderView = () => {
    switch (currentView) {
      case "students":
        return <StudentManagement />;
      case "teachers":
        return <TeacherManagement />;
      case "parents":
        return <ParentManagement />;
      default:
        return <UserList />;
    }
  };

  const renderHeader = () => {
    return (
      <>
        <div className="fw-semibold ps-5">
          {currentView === "teachers"
            ? "Listes Enseignants"
            : currentView === "students"
            ? "Listes Étudiants"
            : currentView === "parents"
            ? "Listes Parents"
            : "Listes Utilisateurs"}
        </div>
      </>
    );
  };

  return (
    <div className="" style={{ width: "100%", overflowX: "hidden" }}>
      <div
        className="bg-body-tertiary mb-4 d-flex align-items-center position-relative"
        style={{ width: "100%", height: "32px", margin: "10px" }}
      >
        <div
          className={`hover-effect h-100 d-flex align-items-center p-2 fw-semibold border-start btn-outline-secondary ${
            currentView === "users" ? "active" : ""
          }`}
          style={{ width: "150px", cursor: "pointer" }}
          onClick={() => handleViewChange("users")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex="0"
        >
          <i className="fa-solid fa-users fs-6 me-1"></i> Utilisateurs
        </div>
        <div
          className={`hover-effect h-100 d-flex align-items-center p-2 fw-semibold border-start btn-outline-secondary ${
            currentView === "students" ? "active" : ""
          }`}
          style={{ width: "150px", cursor: "pointer" }}
          onClick={() => handleViewChange("students")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex="0"
        >
          <i className="fa-solid fa-user-graduate me-1 fs-6"></i> Étudiants
        </div>
        <div
          className={`hover-effect h-100 d-flex align-items-center p-2 fw-semibold border-start btn-outline-secondary ${
            currentView === "teachers" ? "active" : ""
          }`}
          style={{ width: "150px", cursor: "pointer" }}
          onClick={() => handleViewChange("teachers")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex="0"
        >
          <i className="fa-solid fa-chalkboard-user me-1 fs-6"></i> Enseignants
        </div>
        <div
          className={`hover-effect h-100 d-flex align-items-center p-2 fw-semibold border-start btn-outline-secondary ${
            currentView === "parents" ? "active" : ""
          }`}
          style={{ width: "150px", cursor: "pointer" }}
          onClick={() => handleViewChange("parents")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex="0"
        >
          <i className="fa-solid fa-user-tie fs-6 me-1"></i> Parents
        </div>
      </div>
      <div className="mb-4 p-1 d-flex align-items-center justify-content-between">
        {renderHeader()}
      </div>
      {renderView()}
    </div>
  );
};

export default UserManagement;
