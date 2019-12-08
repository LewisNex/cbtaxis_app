import React, { Component } from 'react'

import Pusher from 'pusher-js';
import axios from 'axios';

import JobList from '../JobList/JobList';

export default class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    const pusher = new Pusher('eb76090e47a74e0751c0', {
      cluster: 'eu',
      forceTLS: true
    });
    const jobChannel = pusher.subscribe('job-channel');
    jobChannel.bind('new-job', (job) => {
        this.setState({jobs: [...this.state.jobs, job]})
        console.log(job)
    });
    axios.get('https://cbtaxisapi.herokuapp.com/job', {
      auth: {
        username: 'admin',
        password: 'En48$spa'
      },
      crossdomain: true
    })
      .then(resp => {
        const jobs = resp.data
        this.setState({jobs: jobs});
      })
      .catch (error => {
        console.log(error);
      })
  }

  render() { 
    return (
      <div></div>
    );
  }
}