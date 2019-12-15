import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pusher from 'pusher-js';
import axios from 'axios';

import JobList from '../JobList/JobList';

class Diary extends Component {
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

const mapStateToProps = state => {
  return { jobs: state.jobs }
};

export default connect(mapStateToProps)(Diary)