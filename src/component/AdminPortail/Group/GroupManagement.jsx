import React, { useState } from "react";
import "tw-elements";
import GroupList from "./GroupList";
import AddGroup from "./AddGroup";

const GroupManagement = () => {
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
      case "groups":
        return <GroupList />;
      case "add-group":
        return <AddGroup handleViewChange={handleViewChange} />;
      default:
        return <GroupList />;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="bg-teal text-light fw-semibold rounded-2 p-1"
          style={{ marginRight: "30px", width: "120px" }}
          onClick={() => handleViewChange("add-group")}
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

export default GroupManagement;
