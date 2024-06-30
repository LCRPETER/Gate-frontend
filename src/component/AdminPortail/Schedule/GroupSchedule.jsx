import React, { useEffect, useState } from "react";
import "./Schedule.css"; // Assurez-vous de créer ce fichier pour les styles

const GroupSchedule = ({ groupId, scheduleId }) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ScheduleService.getGroupScheduleById(groupId, scheduleId)
      .then((response) => {
        setSchedule(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("There was an error fetching the schedule!");
        setLoading(false);
      });
  }, [groupId, scheduleId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!schedule) {
    return (
      <div>No schedule found for the specified group and schedule ID.</div>
    );
  }

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hours = Array.from({ length: 11 }, (_, i) => i + 8); // Heures de 8h à 18h

  const getBackgroundColor = (courseName) => {
    // Définir des couleurs de fond pour chaque matière
    const colors = {
      UML: "#FFDDC1",
      Analyse: "#FFC1DD",
      "Machine Learning": "#C1E1FF",
      History: "#D3FFC1",
      // Ajoutez plus de matières et de couleurs ici
    };
    return colors[courseName] || "#FFFFFF";
  };

  const renderTableCell = (day, hour) => {
    const course = schedule.courses.find(
      (course) =>
        course.dayOfWeek.toUpperCase() === day.toUpperCase() &&
        parseInt(course.startTime.split(":")[0]) === hour
    );
    if (course) {
      return (
        <td
          className="rounded-5 p-3 m-2 fw-medium"
          key={`${day}-${hour}`}
          style={{
            backgroundColor: getBackgroundColor(course.nameSubject),
            marginTop: "20px",
          }}
        >
          {course.nameSubject}
        </td>
      );
    } else {
      return <td key={`${day}-${hour}`} className="border bg-teal " />;
    }
  };

  return (
    <div className="emploi-du-temps">
      <header
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "20px" }}
      >
        <div>
          <h4>{schedule.description}</h4>
          <div className="mt-4 text-teal fst-italic fs-5">
            {schedule.groupName}
            {":  "} {schedule.groupLevel}
          </div>
          <div className="fst-italic text-secondary">
            {" du "}
            {new Date(schedule.startDate).toLocaleDateString()}
            {" au "}
            {new Date(schedule.endDate).toLocaleDateString()}
          </div>
        </div>
        <div className="controls-schedule">
          <button>Aujourd'hui</button>
          <button>Mois</button>
          <button>Semaine</button>
          <button>Jour</button>
        </div>
      </header>
      <table>
        <thead>
          <tr className="border">
            <th></th>
            {daysOfWeek.map((day) => (
              <th key={day} className="border text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour} className="border">
              <td className="border">{hour}:00</td>
              {daysOfWeek.map((day) => renderTableCell(day, hour))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupSchedule;

/*
const schedule = [
  {
    day: "Lundi",
    time: "7:00",
    subject: "Machine Learning",
    color: "#6c757d",
  },
  { day: "Lundi", time: "12:00", subject: "Python", color: "#dc3545" },
  { day: "Mardi", time: "8:00", subject: "Java", color: "#6c757d" },
  { day: "Mardi", time: "13:00", subject: "Anglais", color: "#28a745" },
  {
    day: "Jeudi",
    time: "8:00",
    subject: "Sécurité Informatique",
    color: "#d39e00",
  },
  {
    day: "Jeudi",
    time: "13:00",
    subject: "Design Graphique",
    color: "#ffc107",
  },
  {
    day: "Vendredi",
    time: "8:00",
    subject: "Framework Web, Symfony",
    color: "#17a2b8",
  },
  {
    day: "Vendredi",
    time: "13:00",
    subject: "Virtualisation Et Cloud",
    color: "#007bff",
  },
];*/
