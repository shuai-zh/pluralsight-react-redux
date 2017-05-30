import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router>
        <div className="container-fluid">
            <header>
                The header..
            </header>

            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    </Router>,
    document.getElementById('app')
);