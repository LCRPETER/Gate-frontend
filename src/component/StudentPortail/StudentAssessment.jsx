import React from "react";

const data = [
  { matiere: "Mathématiques", typeEvaluation: "Examen", date: "2024-06-20" },
  { matiere: "Français", typeEvaluation: "Devoir", date: "2024-06-21" },
  { matiere: "Histoire", typeEvaluation: "Examen", date: "2024-06-22" },
  { matiere: "Physique", typeEvaluation: "Devoir", date: "2024-06-23" },
  { matiere: "Chimie", typeEvaluation: "Examen", date: "2024-06-24" },
  { matiere: "Biologie", typeEvaluation: "Devoir", date: "2024-06-25" },
  { matiere: "Géographie", typeEvaluation: "Examen", date: "2024-06-26" },
  { matiere: "Anglais", typeEvaluation: "Devoir", date: "2024-06-27" },
  { matiere: "Espagnol", typeEvaluation: "Examen", date: "2024-06-28" },
  { matiere: "Arts plastiques", typeEvaluation: "Devoir", date: "2024-06-29" },
  { matiere: "Musique", typeEvaluation: "Examen", date: "2024-06-30" },
  // Ajoutez d'autres lignes de données ici si nécessaire
];

const StudentAssessment = () => {
  return (
    <>
      <table className="table mt-5 border-1 border-secondary border-start-0 border-end-0 text-center border-bottom-0 border-top-0 w-100 border-dark border-start-0 border-end-0 ">
        <thead>
          <tr className="fw-bolder">
            <th
              scope="col"
              className="border-1 border-secondary border-start-0 border-end-0"
            >
              Matière
            </th>
            <th
              scope="col"
              className="border-1 border-secondary border-start-0 border-end-0"
            >
              Type d'évaluation
            </th>
            <th
              scope="col"
              className="border-1 border-secondary border-start-0 border-end-0"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border-1 border-secondary border-start-0 border-end-0">
                {item.matiere}
              </td>
              <td className="border-1 border-secondary border-start-0 border-end-0">
                {item.typeEvaluation}
              </td>
              <td className="border-1 border-secondary border-start-0 border-end-0">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentAssessment;
