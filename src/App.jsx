// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./component/AdminPortail/Users/UserDetail";
import StudentDetail from "./component/AdminPortail/Students/StudentDetail";
import StudentList from "./component/AdminPortail/Students/StudentList";
import ParentList from "./component/AdminPortail/Parents/ParentList";
import ParentDetail from "./component/AdminPortail/Parents/ParentDetail";
import TeacherList from "./component/AdminPortail/Teachers/TeacherList";
import TeacherDetail from "./component/AdminPortail/Teachers/TeacherDetail";
import UserSearch from "./component/AdminPortail/Users/UserSearch";
import AdminManagement from "./component/AdminPortail/AdminManagement";
import UserList from "./component/AdminPortail/Users/UserList";
import AddStudent from "./component/AdminPortail/Students/AddStudent";
import StudentPortail from "./component/StudentPortail/StudentPortail";
import TeacherPortail from "./component/TeacherPortail/TeacherPortail";
import ParentPortail from "./component/ParentPortail/ParentPortail";
import StudentNotes from "./component/StudentPortail/StudentNotes";
import StudentAssiduite from "./component/StudentPortail/StudentAssiduite";
import StudentAssessment from "./component/StudentPortail/StudentAssessment";
import ScheduleManagement from "./component/AdminPortail/Schedule/ScheduleManagement";
import GroupSchedule from "./component/AdminPortail/Schedule/GroupSchedule";
import Auth from "./component/Auth/Auth";
import AddCourse from "./component/AdminPortail/Course/AddCourse";

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
          <Route path="/student-notes" element={<StudentNotes />} />
          <Route path="/student-assiduite" element={<StudentAssiduite />} />
          <Route path="/student-assessment" element={<StudentAssessment />} />
          <Route path="/schedule" element={<ScheduleManagement />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route
            path="/groups/:groupId/schedules/:scheduleId"
            element={<GroupSchedule />}
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/parents" element={<ParentList />} />
          <Route path="/parents/:id" element={<ParentDetail />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/teachers/:id" element={<TeacherDetail />} />
          <Route path="/search-users" element={<UserSearch />} />
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
