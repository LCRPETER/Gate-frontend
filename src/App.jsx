// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminManagement from "./component/AdminPortail/AdminManagement";
import StudentPortail from "./component/StudentPortail/StudentPortail";
import TeacherPortail from "./component/TeacherPortail/TeacherPortail";
import ParentPortail from "./component/ParentPortail/ParentPortail";
import Auth from "./component/Auth/Auth";

const App = () => {
  const studentMatricule = localStorage.getItem("matricule");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/api/admin/" element={<AdminManagement />} />
          <Route
            path="/api/student/"
            element={<StudentPortail studentMatricule={studentMatricule} />}
          />
          <Route
            path="/api/teacher/"
            element={<TeacherPortail id={studentMatricule} />}
          />
          <Route path="/api/parent/" element={<ParentPortail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
