import React, { useState, useEffect } from "react";
import { getCourseById, updateCourse } from "../../../service/CourseService";

const UpdateCourse = ({ handleViewChange, courseId }) => {
  const [formData, setFormData] = useState({
    dateCourse: "",
    dayOfWeek: "",
    startTime: "",
    endTime: "",
    subject: { nameSubject: "" },
    schedules: { description: "", groupName: "" },
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCourseById(courseId)
      .then((response) => {
        const courseData = response.data;
        setFormData({
          dateCourse: courseData.dateCourse,
          dayOfWeek: courseData.dayOfWeek,
          startTime: courseData.startTime,
          endTime: courseData.endTime,
          subject: { nameSubject: courseData.nameSubject },
          schedules: {
            description: courseData.schedule_description,
            groupName: courseData.nameGroup,
          },
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du cours",
          error
        );
      });
  }, [courseId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubjectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      subject: {
        ...prevState.subject,
        [name]: value,
      },
    }));
  };

  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      schedules: {
        ...prevState.schedules,
        [name]: value,
      },
    }));
  };

  const saveCourseForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedCourse = {
      dateCourse: formData.dateCourse,
      dayOfWeek: formData.dayOfWeek,
      startTime: formData.startTime,
      endTime: formData.endTime,
      subject: { nameSubject: formData.subject.nameSubject },
      schedules: {
        description: formData.schedules.description,
        groupName: formData.schedules.groupName,
      },
    };

    updateCourse(courseId, updatedCourse)
      .then((response) => {
        setSuccessMessage("Cours mis à jour avec succès.");
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de la mise à jour du cours.");
        setSuccessMessage("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative p-4">
      <button
        className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
        style={{ marginTop: "20px", top: "-50px" }}
        onClick={() => handleViewChange("courses")}
      >
        Retour
      </button>
      <div className="m-4 col-md-10 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Modifier un cours
        </h2>
        {successMessage && (
          <div
            className="alert alert-success text-center"
            style={{ backgroundColor: "white", color: "green" }}
          >
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div
            className="alert alert-danger text-center"
            style={{ backgroundColor: "white", color: "red" }}
          >
            {errorMessage}
          </div>
        )}
        <div className="row">
          <div className="card">
            <div className="card-body">
              <form onSubmit={saveCourseForm}>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="date"
                      placeholder="Date du cours"
                      name="dateCourse"
                      value={formData.dateCourse}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <select
                      name="dayOfWeek"
                      value={formData.dayOfWeek}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Sélectionner le jour</option>
                      <option value="MONDAY">Lundi</option>
                      <option value="TUESDAY">Mardi</option>
                      <option value="WEDNESDAY">Mercredi</option>
                      <option value="THURSDAY">Jeudi</option>
                      <option value="FRIDAY">Vendredi</option>
                      <option value="SATURDAY">Samedi</option>
                      <option value="SUNDAY">Dimanche</option>
                    </select>
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="time"
                      placeholder="Heure de début"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="time"
                      placeholder="Heure de fin"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Nom de la matière"
                      name="nameSubject"
                      value={formData.subject.nameSubject}
                      onChange={handleSubjectChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Description de l'horaire"
                      name="description"
                      value={formData.schedules.description}
                      onChange={handleScheduleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Nom du groupe"
                      name="groupName"
                      value={formData.schedules.groupName}
                      onChange={handleScheduleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
                    disabled={loading}
                  >
                    {loading ? "Modification en cours..." : "Modifier"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
