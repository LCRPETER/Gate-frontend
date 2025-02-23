import React, { useEffect, useState } from "react";
import { getStudentGrades } from "../../service/Student-portail/StudentGradesService";

const StudentGrades = ({ studentMatricule }) => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStudentGrades(studentMatricule);

        console.log("API Response:", response);
        if (response) {
          setGrades(response);
        } else {
          setGrades([]);
        }

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
    return <div>Error fetching grades: {error.message}</div>;
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
            <th>Evaluation</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr
              key={grade.grade_id}
              className="border-secondary border-start-0 border-end-0 h-12 text-center"
            >
              <td>{grade.nameSubject}</td>
              <td>{grade.assessment}</td>
              <td>{grade.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGrades;
