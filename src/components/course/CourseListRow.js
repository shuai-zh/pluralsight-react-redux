import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseListRowDeleteButton from "./CourseListRowDeleteButton";

const CourseListRow = ({ course, onCourseDelete }) => {
  return (
    <tr>
      <td>
        <a href={course.watchHref} target="_blank">
          Watch
        </a>
      </td>
      <td>
        <Link to={"/course/" + course.id}>
          {course.title}
        </Link>
      </td>
      <td>
        {course.authorId}
      </td>
      <td>
        {course.category}
      </td>
      <td>
        {course.length}
      </td>
      <td>
        <CourseListRowDeleteButton courseId={course.id} onCourseDelete={onCourseDelete} />
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onCourseDelete: PropTypes.func.isRequired
};

export default CourseListRow;
