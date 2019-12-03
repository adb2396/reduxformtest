import {
    ADD_TASK,
    GET_TASKS,
    EDIT_TASK,
    DELETE_TASK
} from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TASK: 
            return [ ...state, action.payload ];
        case GET_TASKS:
            return state;
        default: 
            return state;
    };
};