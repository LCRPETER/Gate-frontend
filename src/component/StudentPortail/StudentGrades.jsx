import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentGrades } from "../../service/Student-portail/StudentGradesService";

const StudentGrades = () => {
  const { studentId } = useParams();
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fonction asynchrone pour récupérer les notes d'un étudiant
    const fetchStudentGrades = async () => {
      try {
        const response = await getStudentGrades(studentId);
        setGrades(response.data.grades); // Supposant que votre backend renvoie un objet avec un tableau de grades sous la clé "grades"
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des notes :", error);
        setError("Erreur lors de la récupération des notes de l'étudiant.");
        setLoading(false);
      }
    };

    fetchStudentGrades();
  }, [studentId]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Notes de l'étudiant</h2>
      <table
        className="table table-striped border border-start-0 border-end-0 w-100"
        style={{ marginTop: "-12rem" }}
      >
        <thead>
          <tr className="border-1 text-center border-secondary border-start-0 border-end-0 h-12 fw-bolder">
            <th>Matière</th>
            <th>Evaluation</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr
              key={index}
              className="border-1 border-secondary border-start-0 border-end-0 h-12 text-center"
            >
              <td>{grade.subjectName}</td>
              <td>{grade.assessment_description}</td>
              <td>{grade.noteValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGrades;
