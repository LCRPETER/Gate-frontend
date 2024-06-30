import React, { useState } from "react";
import "tw-elements";
import CourseList from "./CourseList";

const CourseManagement = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end m-auto position-relative w-50 me-5">
        <button
          className="bg-primary text-light fw-semibold rounded-pill p-1"
          style={{ marginRight: "30px", width: "120px" }}
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
      <div>
        <CourseList />
      </div>
    </>
  );
};

export default CourseManagement;
