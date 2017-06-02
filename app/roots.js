import React from 'react'
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import store from './store'
import axios from 'axios'

import App from './components/App';
import Campuses from './components/Campuses';
import Students from './components/Students';
import CreateContainer from './components/CreateContainer';


import { receiveCampuses, getCampusById } from './action-creators/campus';
import { receiveStudents } from './action-creators/students';


const onAppEnter = () => {
    const allCampus = axios.get('/api/');
    const allStudents = axios.get('/api/students');

    return Promise
        .all([allCampus, allStudents])
        .then(responses => responses.map(r => r.data))
        .then(([campus, students]) => {
            store.dispatch(receiveCampuses(campus));
            store.dispatch(receiveStudents(students));
        }).catch(console.error.bind(console));
};

export default function Root () {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App} onEnter={onAppEnter}>
                    <Route path="/campus" component={Campuses}/>
                    <Route path="/students" component={Students}/>
                    <Route path="/student/add" component={CreateContainer}/>
                    <Route path="/campus/add" component={CreateContainer}/>>
                    {/*Using the same component here cause I though when the time came I could make if polyform*/}
                    <Route path="/campus/edit" component={CreateContainer}/>>
                    <Route path="/student/edit" component={CreateContainer}/>
                    <IndexRedirect to="/campus"/>
                </Route>
            </Router>
        </Provider>
    )
}

// Notes:
// Ok so... I ran out of time, I used most of review week to review and I started this on thursday night
// Gabi, Elliot and Emily told me it was long but there was no point on start typing without fully understanding
// So, time's up! I have set the new state with no mutations using react-router, I have set the API routes (all working)
// I have set the models database it's cool, some action creators, the reducer, combined reducers, store etc... So it looks like

// All I needed to do now was to start the party to do the forms actions (edit/create), delete actions and actually
// rendering cause I have dummy components that I made first to leave the visuals ready

//Thank you all

