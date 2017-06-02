import {
    RECEIVE_STUDENTS,
} from '../constants';


const initialStudentsState = {
    students:{}
};

export default function (state = initialStudentsState, action) {

    const newState = Object.assign({}, state); //since it's react redux we always have to create a new one .. immutab..

    switch (action.type) {

        case RECEIVE_STUDENTS:
            newState.students = action.students;
            break;

        default:
            return state;

    }

    return newState;

}