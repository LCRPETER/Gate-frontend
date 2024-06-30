import React, { useState } from "react";
import DashboardStudent from "./DashboardStudent";
import StudentNotes from "./StudentNotes";
import StudentDetail from "../AdminPortail/Students/StudentDetail";
import StudentAssiduite from "./StudentAssiduite";
import StudentAssessment from "./StudentAssessment";

const StudentPortail = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardStudent />;
      case "personal-info":
        return <StudentDetail />;
      case "schedules":
        return <div>Consulter emploi du temps</div>;
      case "grades":
        return <StudentNotes />;
      case "assiduite":
        return <StudentAssiduite />;
      case "assessment":
        return <StudentAssessment />;
      case "payments":
        return <div>Consulter l’historique des paiements</div>;
      case "settings":
        return <div>Paramètre</div>;
      default:
        return <DashboardStudent />;
    }
  };

  return (
    <div className="grid-container" style={{ width: "100%", height: "100vh" }}>
      <div className="box-left bg-orange-peel rounded-0 shadow rounded">
        <div
          className="w-100 m-auto p-2 position-relative"
          style={{ height: "170px" }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <div className="image-form-profil">
              <img src="../../../public/asset/images/vso.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="d-flex align-items-center text-light justify-content-center fw-semibold">
            Vinscia Okiemba
          </div>
          <span
            className="position-absolute shadow-sm"
            style={{
              width: "100%",
              height: "1px",
              left: "50%",
              top: "100%",
              transform: "translate(-50%)",
              backgroundColor: "rgba(148, 147, 147, 0.568)",
            }}
          ></span>
        </div>
        <div className="h-75 w-100">
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("dashboard")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-student m-auto ${
                currentView === "dashboard" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-house fs-6"></i> Tableau de bord
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("personal-info")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-student m-auto ${
                currentView === "personal-info" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-id-card fs-6"></i> Information
              personnelle
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("schedules")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-student m-auto ${
                currentView === "schedules" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-calendar-days fs-5"></i> Emplois du
              temps
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("grades")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-student d-flex align-items-center m-auto ${
                currentView === "grades" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="me-1">
                <i class="fa-regular fa-clipboard fs-5"></i>
              </div>
              <div>Notes</div>
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>

          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("assessment")}
          >
            <div
              className={`w-100 p-1 rounded-1 d-flex align-items-center hover-box-student m-auto ${
                currentView === "assessment" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div>
                <i className="fa-solid fa-chart-line fs-5 me-1"></i>
              </div>
              <div>Evaluation</div>
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("assiduite")}
          >
            <div
              className={`w-100 p-1 rounded-1 d-flex align-items-center hover-box-student m-auto ${
                currentView === "assiduite" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div>
                <i class="fa-solid fa-user-clock fs-5 me-1"></i>
              </div>
              <div>Assiduité</div>
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
            style={{ height: "45px" }}
            onClick={() => handleViewChange("payments")}
          >
            <div
              className={`w-100 p-1 rounded-1 hover-box-student m-auto ${
                currentView === "payments" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-money-check-dollar fs-5"></i> Paiements
            </div>
            <span
              className="position-absolute shadow-sm"
              style={{
                width: "100%",
                height: "1px",
                left: "50%",
                top: "100%",
                transform: "translate(-50%)",
                backgroundColor: "rgba(148, 147, 147, 0.568)",
              }}
            ></span>
          </div>
          <div
            className="mb-2 text-light ps-3 pe-4 d-flex align-items-center "
            style={{ height: "45px" }}
            onClick={() => handleViewChange("settings")}
          >
            <p
              className={`w-100 p-1 rounded-1 hover-box-student m-auto ${
                currentView === "settings" ? "active-student" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-gear fs-5"></i> Paramètre
            </p>
          </div>
        </div>
      </div>
      <div className="box-right p-3 position-relative rounded-0 d-flex align-items-center justify-content-between">
        <div className="fs-2 fw-semibold">Bienvenue dans votre Portail</div>
        <div className="p-2 fw-semibold">
          <div className="" style={{ cursor: "pointer" }}>
            <div className="text-center" style={{ color: "#ff9800" }}>
              <i className="fa-solid fa-user fs-5"></i>{" "}
            </div>
            <div className="fs-6 fw-semibold">Profil</div>
          </div>
        </div>
        <span
          className="position-absolute bg-secondary shadow-sm"
          style={{
            width: "96%",
            height: "3.5px",
            left: "50%",
            top: "100%",
            transform: "translate(-50%)",
          }}
        ></span>
      </div>
      <div className="box-right-center pe-3 ps-3 rounded-0">{renderView()}</div>
    </div>
  );
};

export default StudentPortail;

//         <div
//           className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
//           style={{ height: "45px" }}
//           onClick={() => handleViewChange("grades")}
//         >
//           <div
//             className="w-100 p-1 rounded-1 hover-box-student m-auto"
//             style={{ cursor: "pointer" }}
//           >
//             <i className="fa-solid fa-chart-line fs-5"></i> Consulter notes et
//             évaluations
//           </div>
//           <span
//             className="position-absolute shadow-sm"
//             style={{
//               width: "100%",
//               height: "1px",
//               left: "50%",
//               top: "100%",
//               transform: "translate(-50%)",
//               backgroundColor: "rgba(148, 147, 147, 0.568)",
//             }}
//           ></span>
//         </div>
//         <div
//           className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
//           style={{ height: "45px" }}
//           onClick={() => handleViewChange("absences")}
//         >
//           <div
//             className="w-100 p-1 rounded-1 hover-box-student m-auto"
//             style={{ cursor: "pointer" }}
//           >
//             <i className="fa-solid fa-user-clock fs-5"></i> Historique des
//             absences
//           </div>
//           <span
//             className="position-absolute shadow-sm"
//             style={{
//               width: "100%",
//               height: "1px",
//               left: "50%",
//               top: "100%",
//               transform: "translate(-50%)",
//               backgroundColor: "rgba(148, 147, 147, 0.568)",
//             }}
//           ></span>
//         </div>
//         <div
//           className="mb-2 text-light position-relative ps-3 pe-4 d-flex align-items-center"
//           style={{ height: "45px" }}
//           onClick={() => handleViewChange("payments")}
//         >
//           <div
//             className="w-100 p-1 rounded-1 hover-box-student m-auto"
//             style={{ cursor: "pointer" }}
//           >
//             <i className="fa-solid fa-money-check-dollar fs-5"></i> Historique
//             des paiements
//           </div>
//           <span
//             className="position-absolute shadow-sm"
//             style={{
//               width: "100%",
//               height: "1px",
//               left: "50%",
//               top: "100%",
//               transform: "translate(-50%)",
//               backgroundColor: "rgba(148, 147, 147, 0.568)",
//             }}
//           ></span>
//         </div>
//         <div
//           className="mb-2 text-light ps-3 pe-4 d-flex align-items-center "
//           style={{ height: "45px" }}
//           onClick={() => handleViewChange("settings")}
//         >
//           <p
//             className="w-100 p-1 rounded-1 hover-box-student m-auto"
//             style={{ cursor: "pointer" }}
//           >
//             <i className="fa-solid fa-gear fs-5"></i> Paramètre
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="box-right p-3 position-relative rounded-0 d-flex align-items-center justify-content-between">
//       <div className="fs-2 fw-semibold">Bienvenue dans votre Portail</div>
//       <div className="p-2 fw-semibold">
//         <div className="" style={{ cursor: "pointer" }}>
//           <div className="text-center" style={{ color: "#ff9800" }}>
//             <i className="fa-solid fa-user fs-5"></i>{" "}
//           </div>
//           <div className="fs-6 fw-semibold">Profil</div>
//         </div>
//       </div>
//       <span
//         className="position-absolute bg-secondary shadow-sm"
//         style={{
//           width: "96%",
//           height: "3.5px",
//           left: "50%",
//           top: "100%",
//           transform: "translate(-50%)",
//         }}
//       ></span>
//     </div>
//     <div className="box-right-center rounded-0">{renderView()}</div>
//   </div>
// );
