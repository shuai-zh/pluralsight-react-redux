import React from "react";
import * as PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";

const CourseList = ({ courses, onCourseDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses.map(course => <CourseListRow key={course.id} course={course} onCourseDelete={onCourseDelete} />)}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onCourseDelete: PropTypes.func.isRequired
};

export default CourseList;
