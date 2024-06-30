// src/components/AddCourse.jsx
import React, { useState } from "react";
import CourseService from "../../../service/CourseService";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    subject: { subject_id: "" },
    dateCourse: "",
    dayOfWeek: "",
    startTime: "",
    endTime: "",
    schedules: [{ schedule_id: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubjectChange = (e) => {
    const { value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      subject: { subject_id: value },
    }));
  };

  const handleScheduleChange = (e) => {
    const { value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      schedules: [{ schedule_id: value }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CourseService.createCourse(courseData);
      console.log("Course created successfully:", response);
      // Reset form after successful submission
      setCourseData({
        subject: { subject_id: "" },
        dateCourse: "",
        dayOfWeek: "",
        startTime: "",
        endTime: "",
        schedules: [{ schedule_id: "" }],
      });
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Subject ID:</label>
        <input
          type="number"
          name="subject_id"
          value={courseData.subject.subject_id}
          onChange={handleSubjectChange}
          required
        />
      </div>
      <div>
        <label>Date Course:</label>
        <input
          type="date"
          name="dateCourse"
          value={courseData.dateCourse}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Day of Week:</label>
        <input
          type="text"
          name="dayOfWeek"
          value={courseData.dayOfWeek}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="text"
          name="startTime"
          value={courseData.startTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="text"
          name="endTime"
          value={courseData.endTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Schedule ID:</label>
        <input
          type="number"
          name="schedule_id"
          value={courseData.schedules[0].schedule_id}
          onChange={handleScheduleChange}
          required
        />
      </div>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
