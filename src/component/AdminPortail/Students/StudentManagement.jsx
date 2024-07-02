import React, { useState } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

const StudentManagement = () => {
  const [currentView, setCurrentView] = useState("students");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "students":
        return <StudentList />;
      case "add-student":
        return <AddStudent handleViewChange={handleViewChange} />;
      default:
        return <StudentList />;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
          style={{ marginRight: "30px", width: "120px" }}
          onClick={() => handleViewChange("add-student")}
        >
          + Ajouter
        </button>

        {showSearch && (
          <input
            type="text"
            className="form-control"
            placeholder="Recherche..."
            style={{ width: "200px", marginLeft: "5px" }}
          />
        )}
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={handleSearchToggle}
        >
          <i className="fa-solid fa-magnifying-glass fw-bold"></i>
        </div>
      </div>
      {renderView()}
    </>
  );
};

export default StudentManagement;
