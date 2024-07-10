import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteCourseModal from "./DeleteCourseModal";
import { getAllCourses } from "../../../service/CourseService";
import UpdateCourse from "./UpdateCourse";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentView, setCurrentView] = useState("courses");

  const coursesPerPage = 3;

  const handleViewChange = (view, courseId = null) => {
    setSelectedCourse(courseId);
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "courses":
        return renderCourseList();
      case "update-course":
        return (
          <UpdateCourse
            handleViewChange={handleViewChange}
            courseId={selectedCourse}
          />
        );
      default:
        return renderParentList();
    }
  };

  useEffect(() => {
    getAllCourses()
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  const handleDeleteClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedCourse && selectedCourse.course_id) {
      CourseService.deleteGroupById(selectedCourse.course_id)
        .then(() => {
          setGroups(
            courses.filter(
              (course) => course.course_id !== selectedCourse.course_id
            )
          );
          setShowModal(false);
          setSelectedGroup(null);
        })
        .catch((error) => {
          console.error("There was an error deleting the course!", error);
          setShowModal(false);
          setSelectedGroup(null);
        });
    } else {
      console.error("Selected course is not properly defined");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGroup(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * coursesPerPage < courses.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * coursesPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + coursesPerPage);

  const renderCourseList = () => (
    <>
      <div className="p-2 ps-4">
        <i
          className="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handlePreviousPage}
        ></i>
        <i
          className="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
          style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
          onClick={handleNextPage}
        ></i>
      </div>
      <div className="container mt-1" style={{ width: "95%" }}>
        {currentCourses.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold">Matière</th>
                <th className="fw-bold">Jour</th>
                <th className="fw-bold">Date</th>
                <th className="fw-bold">Heure Début</th>
                <th className="fw-bold">Heure Fin</th>
              </tr>
            </thead>
            <tbody>
              {currentCourses.map((course) => (
                <tr key={course.course_id}>
                  <td>
                    <Link to={`/courses/${course.course_id}`}>
                      {course.nameSubject}
                    </Link>
                  </td>
                  <td>{course.dayOfWeek}</td>
                  <td>{course.dateCourse}</td>
                  <td>{course.startTime}</td>
                  <td>{course.endTime}</td>
                  <td className="text-center fs-3">
                    <i
                      className="fa-solid fa-pen-to-square text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleViewChange("update-course", course.course_id)
                      }
                    ></i>
                  </td>
                  <td className="text-center fs-3 text-danger">
                    <i
                      className="fa-solid fa-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteClick(course)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Liste des coursees vide.</p>
        )}

        <DeleteCourseModal
          show={showModal}
          course={selectedCourse}
          onClose={handleCloseModal}
          onConfirm={handleDeleteConfirm}
        />
      </div>
      <div className="ps-4 pe-5 d-flex align-items-center justify-content-between">
        <div>
          <i
            className="fa-solid fa-arrow-left-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handlePreviousPage}
          ></i>
          <i
            className="fa-solid fa-arrow-right-long bg-primary rounded-circle ms-2 text-light"
            style={{ cursor: "pointer", fontSize: "15px", padding: "2.5px" }}
            onClick={handleNextPage}
          ></i>
        </div>
        <div>
          {currentPage + 1}/{Math.ceil(courses.length / coursesPerPage)}
        </div>
      </div>
    </>
  );

  return <>{renderView()}</>;
};

export default CourseList;
