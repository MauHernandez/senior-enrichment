import {combineReducers} from 'redux';
import campusReducer from './campusReducer';
import studentReducer from './studentReducer';

export default combineReducers({
    campus: campusReducer,
    student: studentReducer,
});
