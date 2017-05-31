import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import AboutPage from './components/about/AboutPage';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router>
        <div className="container-fluid">
            <header>
                <Header />
            </header>

            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/about" component={AboutPage} />
        </div>
    </Router>,
    document.getElementById('app')
);