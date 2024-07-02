import React, { useState } from "react";
import ParentList from "./ParentList";
import AddParent from "./AddParent";

const ParentManagement = () => {
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
      case "parents":
        return <ParentList />;
      case "add-parents":
        return <AddParent handleViewChange={handleViewChange} />;
      default:
        return <ParentList />;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
          style={{ marginRight: "30px", width: "120px" }}
          onClick={() => handleViewChange("add-parents")}
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

export default ParentManagement;
