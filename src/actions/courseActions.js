import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(courseId) {
  return { type: types.DELETE_COURSE_SUCCESS, courseId };
}

export function deleteNonExistingCourseFailure(courseId) {
  return { type: types.DELETE_NON_EXISTING_COURSE_FAILURE, courseId };
}

export function loadCourses() {
  return dispatch => {
    dispatch(beginAjaxCall());

    return courseApi.getAllCourses().then(courses => dispatch(loadCoursesSuccess(courses))).catch(error => {
      throw error;
    });
  };
}

export function saveCourse(course) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());

    return courseApi
      .saveCourse(course)
      .then(
        savedCourse =>
          course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse))
      )
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw err;
      });
  };
}

export function deleteCourse(courseId) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());

    return courseApi
      .deleteCourse(courseId)
      .then(
        deleted =>
          deleted ? dispatch(deleteCourseSuccess(courseId)) : dispatch(deleteNonExistingCourseFailure(courseId))
      )
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw err;
      });
  };
}
