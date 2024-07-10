import React, { useState } from "react";
import "./Attendance.css";

import IMG20240612WA0046 from "../../../public/asset/images/piere.png";
import IMG20240612WA0053 from "../../../public/asset/images/piere.png";
import IMG20240612WA0057 from "../../../public/asset/images/piere.png";
import IMG20240612WA0060 from "../../../public/asset/images/piere.png";
import IMG20240612WA0056 from "../../../public/asset/images/piere.png";
import IMG20240612WA0049 from "../../../public/asset/images/piere.png";
import IMG20240612WA0058 from "../../../public/asset/images/piere.png";
import IMG20240612WA0059 from "../../../public/asset/images/piere.png";

const students = [
  { name: "Iasinke Eder", image: IMG20240612WA0046 },
  { name: "Mokolo Lokwa", image: IMG20240612WA0057 },
  { name: "Simon Pierre", image: IMG20240612WA0053 },
  { name: "Parfait Destin", image: IMG20240612WA0060 },
  { name: "Momo Sounny", image: IMG20240612WA0059 },
  { name: "Patron Achour", image: IMG20240612WA0049 },
  { name: "Pasta Vicky", image: IMG20240612WA0058 },
  { name: "Nathan", image: IMG20240612WA0056 },
];

const Attendance = () => {
  const [Allstudent, setAllstudent] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState([]);

  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.name] = { present: false, absent: false };
      return acc;
    }, {})
  );

  const handleAttendance = (name, type) => {
    setAttendance((prev) => ({
      ...prev,
      [name]: { present: type === "present", absent: type === "absent" },
    }));
  };

  const handleSelectAll = (type) => {
    setAttendance((prev) =>
      students.reduce((acc, student) => {
        acc[student.name] = {
          present: type === "present",
          absent: type === "absent",
        };
        return acc;
      }, {})
    );
  };

  return (
    <div className="assiduite">
      <header className="header-attendance ">
        <h1>Accueil Présence et Absences</h1>
        <div className="select-all">
          <label>
            Tout sélectionner
            <input
              type="checkbox"
              onChange={(e) =>
                handleSelectAll(e.target.checked ? "present" : "absent")
              }
            />
          </label>
        </div>
      </header>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student.name} className="student-card">
            <img src={student.image} alt={student.name} />
            <h3>{student.name}</h3>
            <div className="attendance-controls">
              <button
                className={`attendance-btn ${
                  attendance[student.name].present ? "selected" : ""
                }`}
                onClick={() => handleAttendance(student.name, "present")}
              >
                <span role="img" aria-label="Present">
                  ✅
                </span>
              </button>
              <button
                className={`attendance-btn ${
                  attendance[student.name].absent ? "selected" : ""
                }`}
                onClick={() => handleAttendance(student.name, "absent")}
              >
                <span role="img" aria-label="Absent">
                  ❌
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
