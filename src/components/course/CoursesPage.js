import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import * as toastr from "toastr";
import CourseList from "./CourseList";
import * as courseActions from "../../actions/courseActions";

export class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.onCourseDelete = this.onCourseDelete.bind(this);
  }

  redirectToAddCoursePage() {
    this.context.router.history.push("/course");
  }

  onCourseDelete(e) {
    let courseId = e.target.dataset.courseId;
    if (confirm(`Are you sure you want to delete course with id: ${courseId}?`)) {
      this.props.actions
        .deleteCourse(courseId)
        .then(() => toastr.success(`Course with id: ${courseId} has been deleted.`));
    }
  }

  render() {
    const { courses } = this.props;
    return (
      <div className="courses-page">
        <h1>Courses<span className="badge badge-default">{courses.length}</span></h1>
        <hr/>
        <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} onCourseDelete={this.onCourseDelete} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

CoursesPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
