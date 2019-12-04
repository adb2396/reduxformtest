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
        case DELETE_TASK:
            return [...state].filter(task => task.id !== action.payload);
        case EDIT_TASK: 
            const newArr = [ ...state ];
            const taskIndex = newArr.findIndex(task => task.id === action.payload.id);
            newArr[taskIndex] = action.payload;
            return newArr;
        default: 
            return state;
    };
};