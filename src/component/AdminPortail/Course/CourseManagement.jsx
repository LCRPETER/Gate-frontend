import React, { useState } from "react";
import "tw-elements";
import CourseList from "./CourseList";
import AddCourse from "./AddCourse";

const CourseManagement = () => {
  const [currentView, setCurrentView] = useState("groups");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "cours":
        return <CourseList />;
      case "add-course":
        return <AddCourse handleViewChange={handleViewChange} />;
      default:
        return <CourseList />;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="bg-teal text-light fw-semibold rounded p-1"
          style={{ marginRight: "30px", width: "120px" }}
          onClick={() => handleViewChange("add-course")}
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

export default CourseManagement;
