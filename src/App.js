import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

import Pusher from 'pusher-js';
import axios from 'axios';

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import List from "./components/List/List";
import Diary from "./components/Diary/Diary";

import './App.scss';

export default class App extends Component {
  componentDidMount() {
    // Set up pusher to listen for new jobs
    const pusher = new Pusher('eb76090e47a74e0751c0', {
      cluster: 'eu',
      forceTLS: true
    });
    const jobChannel = pusher.subscribe('job-channel');
    jobChannel.bind('new-job', (job) => {
        this.state.addJob(job)
        console.log(job)
    });
    // Get all initial jobs
    axios.get('https://cbtaxisapi.herokuapp.com/job', {
      auth: {
        username: 'admin',
        password: 'En48$spa'
      },
      crossdomain: true
    })
      .then(resp => {
        const jobs = resp.data
        this.props.addJobs(jobs);
      })
      .catch (error => {
        console.log(error);
      })
  }

  render() { 
    return (
      <Router>
        <div>
          <NavBar />
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list">
              <List />
            </Route>
            <Route exact path="/diary">
              <Diary />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

