import React from "react";

export default function StudentAssiduite() {
  const data = [
    { date: "2023-09-20", matiere: "Algèbre" },
    { date: "2023-11-01", matiere: "Analyse" },
    { date: "2024-01-12", matiere: "Python" },
    { date: "2024-01-23", matiere: "Developement web" },
    { date: "2024-03-24", matiere: "Analyse" },
    { date: "2024-05-05", matiere: "Developement mobile" },
    { date: "2024-05-18", matiere: "Base de données" },
  ];

  return (
    <div style={{ marginTop: "-30px" }}>
      <h1 className=" m-auto text-center mb-4 text-teal">Liste d'absence</h1>
      <table className="table border border-1 border-secondary w-100 border-start-0 border-end-0">
        <thead>
          <tr className="border-1 border-start-0 border-end-0">
            <th
              scope="col "
              className="border border-start-0 border-end-0 fw-bolder"
            >
              Date
            </th>
            <th
              scope="col"
              className="border border-start-0 border-end-0 fw-bolder"
            >
              Matière
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-1 border-start-0 border-end-0">
              <td className="border-1 border-start-0 border-end-0">
                {item.date}
              </td>
              <td className="border-1 border-start-0 border-end-0">
                {item.matiere}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
