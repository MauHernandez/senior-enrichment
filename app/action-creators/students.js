import { RECEIVE_STUDENTS} from '../constants';
import axios from 'axios';

export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});



