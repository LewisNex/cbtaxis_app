export const ADD_JOB = "ADD_JOB";
export const ADD_JOBS = "ADD_JOBS";
export const REMOVE_JOB = "REMOVE_JOB";


export const addJob = (job) => ({
    type: ADD_JOB,
    payload: job
})
export const addJobs = (jobs) => ({
    type: ADD_JOBS,
    payload: jobs
})
export const removeJob = (jobId) => ({
    type: REMOVE_JOB,
    payload: jobId
})