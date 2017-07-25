import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import HomePage from "../home/HomePage";
import CoursesPage from "../course/CoursesPage"; // eslint-disable-line import/no-named-as-default
import ManageCoursePage from "../course/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import ManageAuthorPage from "../author/ManageAuthorPage"; // eslint-disable-line import/no-named-as-default
import AuthorsPage from "../author/AuthorsPage";
import AboutPage from "../about/AboutPage";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route path="/course/:id?" component={ManageCoursePage} />
        <Route exact path="/authors" component={AuthorsPage} />
        <Route path="/author/:id?" component={ManageAuthorPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </main>
  );
};

Main.propTypes = {};

export default Main;
