import React, { Component } from "react";
import PropTypes from "prop-types";

const CourseListRowDeleteButton = ({ courseId, onCourseDelete }) => {
  return (
    <div className="course-list-row-delete-button-container">
      <button
        className="btn btn-danger course-list-row-delete-button"
        data-course-id={courseId}
        onClick={onCourseDelete}
      >
        X
      </button>
    </div>
  );
};

CourseListRowDeleteButton.propTypes = {
  courseId: PropTypes.string.isRequired,
  onCourseDelete: PropTypes.func.isRequired
};

export default CourseListRowDeleteButton;
