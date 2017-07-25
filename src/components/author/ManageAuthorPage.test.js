import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { ManageAuthorPage } from "./ManageAuthorPage";

describe("Manage Author Page", () => {
  it("sets error message when trying to save empty first name", () => {
    const props = {
      authors: [],
      actions: {
        saveAuthor: () => Promise.resolve()
      },
      author: {
        id: "",
        firstName: "",
        lastName: "Zhang"
      }
    };

    const wrapper = mount(<ManageAuthorPage {...props} />);

    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
    expect(wrapper.state().errors.firstName).toBe("First name must be at least 2 characters.");
  });

  it("sets error message when trying to save empty last name", () => {
    const props = {
      authors: [],
      actions: {
        saveAuthor: () => Promise.resolve()
      },
      author: {
        id: "",
        firstName: "Shuai",
        lastName: ""
      }
    };

    const wrapper = mount(<ManageAuthorPage {...props} />);

    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
    expect(wrapper.state().errors.lastName).toBe("Last name must be at least 2 characters.");
  });
});
