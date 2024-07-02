import React, { useState } from "react";
import TeacherList from "./TeacherList";
import AddTeacher from "./AddTeacher";

const TeacherManagement = () => {
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
      case "teachers":
        return <TeacherList />;
      case "add-teacher":
        return <AddTeacher handleViewChange={handleViewChange} />;
      default:
        return <TeacherList />;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
          style={{ marginRight: "30px", width: "120px" }}
          onClick={() => handleViewChange("add-teacher")}
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

export default TeacherManagement;
