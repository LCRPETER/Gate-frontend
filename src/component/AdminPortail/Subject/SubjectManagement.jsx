import React, { useState } from "react";
import "tw-elements";
import SubjectList from "./SubjectList";
import AddSubject from "./AddSubject";

const SubjectManagement = () => {
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
      case "subjects":
        return <SubjectList />;
      case "add-subject":
        return <AddSubject handleViewChange={handleViewChange} />;
      default:
        return <SubjectList />;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="bg-teal text-light fw-semibold rounded-4 p-1"
          style={{ marginRight: "30px", width: "120px" }}
          onClick={() => handleViewChange("add-subject")}
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

export default SubjectManagement;
