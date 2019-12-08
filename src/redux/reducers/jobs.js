import { ADD_JOB, ADD_JOBS, REMOVE_JOB } from "../actions/jobs";

const initialJobsState = {
    jobs: []
};

export function jobsReducer(state = initialJobsState, action) {
    switch (action.type) {
        case ADD_JOB: {
            const job = action.payload;
            return {
                ...state,
                jobs: [...state.jobs, job]
            };
        }
        case ADD_JOBS: {
            const jobs = action.payload;
            return {
                ...state,
                jobs: [...state.jobs, ...jobs]
            };
        }
        case REMOVE_JOB: {
            const jobId = action.payload;
            return {
                ...state,
                jobs: state.jobs.filter((job) => job.id !== jobId)
            };
        }
        default:
            return state;
    }
}