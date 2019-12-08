import React, { Component } from 'react';
import JobItem from './JobItem.js'

export default function JobList(props) {
    return (
        <div className='container'>
            <header className='title'>
                <h2>Current Jobs</h2>
                <h3>Sort by:</h3>
            </header>
            <ul className='job-list'>
                {props.jobs.map((job) => (
                    <JobItem key={job.public_id} job={job} />
                ))}
            </ul>
        </div>
    );
}