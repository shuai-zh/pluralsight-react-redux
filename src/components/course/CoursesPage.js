import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import CourseList from "./CourseList";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

//   courseRow(course, index) {
//     return (
//       <div key={index}>
//         {course.title}
//       </div>
//     );
//   }

  redirectToAddCoursePage() {
    this.context.router.history.push("/course");
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} />
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
