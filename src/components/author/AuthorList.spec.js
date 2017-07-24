import expect from "expect";
import React from "react";
import { mount, shallow } from "enzyme";
import AuthorList from "./AuthorList";

function setup(saving) {
  const props = {
    authors: [
      {
        id: "shuai-zhang",
        firstName: "shuai",
        lastName: "zhang"
      },
      {
        id: "isaiah-thomas",
        firstName: "Isaiah",
        lastName: "Thomas"
      }
    ]
  };
  return shallow(<AuthorList {...props} />);
}

describe("Author List", () => {
  it("renders div and table", () => {
    const wrapper = setup();
    expect(wrapper.find("div.author-list").length).toBe(1);
    expect(wrapper.find("table").length).toBe(1);
  });

  it("renders one row per author", () => {
    const wrapper = setup();
    expect(wrapper.find("table tbody AuthorListRow").length).toBe(2);
  });
});
