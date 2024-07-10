import React, { useState, useEffect } from "react";
import {
  deleteAbsentById,
  getAllStudents,
  getAttendanceByStudent,
  recordAttendance,
  updateAttendance,
} from "../../service/Teacher-portail/AttendenceService";

const AttendanceManagement = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(false);

  useEffect(() => {
    // Charge la liste des étudiants au montage du composant
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  };

  const handleAttendanceChange = (studentId, courseId, status) => {
    const courseAttendance = {
      student: { user_id: studentId },
      course: { idCourse: courseId },
      attendance_status: status,
    };

    if (status) {
      // Enregistrer l'assiduité
      recordAttendance(courseAttendance)
        .then((response) => {
          console.log("Attendance recorded successfully:", response.data);
          // Actualiser l'affichage ou afficher un message de confirmation
        })
        .catch((error) => {
          console.error("Error recording attendance:", error);
        });
    } else {
      // Mettre à jour l'assiduité
      updateAttendance(courseAttendance)
        .then((response) => {
          console.log("Attendance updated successfully:", response.data);
          // Actualiser l'affichage ou afficher un message de confirmation
        })
        .catch((error) => {
          console.error("Error updating attendance:", error);
        });
    }
  };

  const handleStudentSelect = (studentId) => {
    setSelectedStudentId(studentId);
    // Exemple: Récupérer l'assiduité par étudiant
    getAttendanceByStudent(studentId)
      .then((response) => {
        console.log("Attendance for student:", response.data);
        // Afficher l'assiduité récupérée dans l'interface utilisateur
      })
      .catch((error) => {
        console.error("Error fetching attendance for student:", error);
      });
  };

  const handleDeleteAbsent = (absentId) => {
    // Supprimer une absence
    deleteAbsentById(absentId)
      .then((response) => {
        console.log("Absent deleted successfully:", response.data);
        // Actualiser l'affichage ou afficher un message de confirmation
      })
      .catch((error) => {
        console.error("Error deleting absent:", error);
      });
  };

  return (
    <div className="attendance-management">
      <h1>Attendance Management</h1>

      <div className="students-list">
        <h2>Students List</h2>
        <ul>
          {students.map((student) => (
            <li key={student.user_id}>
              <span>
                {student.firstName} {student.lastName}
              </span>
              <button onClick={() => handleStudentSelect(student.user_id)}>
                View Attendance
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedStudentId && (
        <div className="attendance-actions">
          <h2>Manage Attendance</h2>
          <h3>Selected Student ID: {selectedStudentId}</h3>
          <label>
            Attendance Status:
            <input
              type="checkbox"
              checked={attendanceStatus}
              onChange={(e) => setAttendanceStatus(e.target.checked)}
            />
            Present
          </label>

          <button
            onClick={() =>
              handleAttendanceChange(
                selectedStudentId,
                courseId,
                attendanceStatus
              )
            }
          >
            Save Attendance
          </button>
        </div>
      )}
    </div>
  );
};

export default AttendanceManagement;
