import { jobsReducer } from "./jobs";
import { combineReducers } from 'redux';

export default combineReducers({
    jobs: jobsReducer
});