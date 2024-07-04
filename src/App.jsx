// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminManagement from "./component/AdminPortail/AdminManagement";
import StudentPortail from "./component/StudentPortail/StudentPortail";
import TeacherPortail from "./component/TeacherPortail/TeacherPortail";
import ParentPortail from "./component/ParentPortail/ParentPortail";
import Auth from "./component/Auth/Auth";
import UpdateSchedule from "./component/AdminPortail/Schedule/UpdateSchedule";
import GroupSelectionForPayment from "./component/AdminPortail/Payement/GroupSelectionForPayment";
import StudentListForPayment from "./component/AdminPortail/Payement/StudentListForPayment";
import AddPayment from "./component/AdminPortail/Payement/AddPayment";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/api/admin/" element={<AdminManagement />} />
          <Route path="/api/student" element={<StudentPortail />} />
          <Route path="/api/teacher" element={<TeacherPortail />} />
          <Route path="/api/parent" element={<ParentPortail />} />
          <Route path="/api/update" element={<UpdateSchedule />} />
          <Route path="/groups" element={<GroupSelectionForPayment />} />
          <Route
            path="/groups/:groupId/students"
            element={<StudentListForPayment />}
          />
          <Route
            path="/students/:studentId/add-payment"
            element={<AddPayment />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
