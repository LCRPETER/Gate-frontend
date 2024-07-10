import React, { useEffect, useState } from "react";
import { getAttendanceByStudentMatricule } from "../../service/Student-portail/StudentAttendance";

const StudentAttendance = ({ studentMatricule }) => {
  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAttendanceByStudentMatricule(
          studentMatricule
        );

        setAttendances(response.data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (studentMatricule) {
      fetchData();
    }
  }, [studentMatricule]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching payments: {error.message}</div>;
  }

  return (
    <div>
      <table
        className="table table-striped border border-start-0 border-end-0 w-100"
        style={{ marginTop: "-12rem" }}
      >
        <thead>
          <tr className="text-center border-secondary border-start-0 border-end-0 h-12 fw-bolder">
            <th>Matière</th>
            <th>Date</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance) => (
            <tr
              key={attendance.attendance_id}
              className="border-secondary border-start-0 border-end-0 h-12 text-center"
            >
              <td>{attendance.nameSubject}</td>
              <td>{attendance.dateCourse}</td>
              <td>
                {attendance.startTime}
                {" - "}
                {attendance.endTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentAttendance;
