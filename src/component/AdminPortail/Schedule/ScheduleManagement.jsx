import React, { useState } from "react";
import "tw-elements";
import ScheduleList from "./ScheduleList";
import AddSchedule from "./AddSchedule";
import UpdateSchedule from "./UpdateSchedule";
import GroupSchedule from "./GroupSchedule";

const ScheduleManagement = () => {
  const [currentView, setCurrentView] = useState("schedule");
  const [showSearch, setShowSearch] = useState(false);
  const [scheduleToUpdate, setScheduleToUpdate] = useState(null);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleViewChange = (view, schedule) => {
    setCurrentView(view);
    setScheduleToUpdate(schedule);
  };

  const renderView = () => {
    switch (currentView) {
      case "schedule":
        return <GroupSchedule handleViewChange={handleViewChange} />;
      case "add-schedule":
        return <AddSchedule handleViewChange={handleViewChange} />;
      case "update-schedule":
        return (
          <UpdateSchedule
            handleViewChange={handleViewChange}
            scheduleToUpdate={scheduleToUpdate}
          />
        );
      default:
        return <GroupSchedule handleViewChange={handleViewChange} />;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="bg-teal text-light fw-semibold rounded-2 p-1"
          style={{ marginRight: "30px", width: "120px" }}
          onClick={() => handleViewChange("add-schedule")}
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

export default ScheduleManagement;
