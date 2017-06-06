import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../home/HomePage';
import CoursesPage from '../course/CoursesPage';
import ManageCoursePage from '../course/ManageCoursePage';
import AboutPage from '../about/AboutPage';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/courses" component={CoursesPage} />
                <Route path="/course/:id?" component={ManageCoursePage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </main>
    );
};

Main.propTypes = {

};

export default Main;