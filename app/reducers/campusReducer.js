import {
    RECEIVE_CAMPUSES,
} from '../constants';


const initialCampusesState = {
    campus:{}
};

export default function (state = initialCampusesState, action) {

    const newState = Object.assign({}, state); //since it's react redux we always have to create a new one .. immutab..

    switch (action.type) {

        case RECEIVE_CAMPUSES:
            newState.campus = action.campuses;
            console.log(newState)
            break;

        default:
            return state;

    }

    return newState;

}