import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { CoursesPage } from "./CoursesPage";

describe("Courses Page", () => {
  it("should render", () => {
    const props = {
      actions: {
        deleteCourse: () => Promise.resolve()
      },
      courses: [
        {
          id: "1",
          watchHref: "2",
          title: "3",
          authorId: "4",
          length: "5",
          category: "6"
        },
        {
          id: "11",
          watchHref: "22",
          title: "33",
          authorId: "44",
          length: "55",
          category: "66"
        }
      ]
    };

    const context = {
      router: {
        history: {
          push: () => {},
          createHref: () => ""
        }
      }
    };

    const wrapper = mount(<CoursesPage {...props} />, { context: context });

    const title = wrapper.find("h1").first();
    expect(title.text()).toBe("Courses");
    const addCourseButton = wrapper.find("input[type='submit']").first();
    expect(addCourseButton.prop("value")).toBe("Add Course");
    const courseList = wrapper.find("CourseList").first();
    expect(courseList).toExist();
  });
});
