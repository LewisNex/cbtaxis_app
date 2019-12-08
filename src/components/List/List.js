import React, { Component } from 'react';

import JobList from '../JobList/JobList';
import { connect } from 'react-redux';

class List extends Component {
  render() { 
    return (
      <JobList jobs={this.props.jobs} />
    );
  }
}

const mapStateToProps = state => state.jobs;

export default connect(
  mapStateToProps,
  null
)(List)