import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import AboutPage from './components/about/AboutPage';
import { loadCourses } from './actions/courseActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router>
            <div className="container-fluid">
                <header>
                    <Header />
                </header>

                <Route exact path="/" component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:id" component={ManageCoursePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);