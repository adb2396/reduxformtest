import {
    ADD_TASK,
    GET_TASKS,
    EDIT_TASK,
    DELETE_TASK
} from './types'

export const getTasks = () => {
    return {
        type: GET_TASKS
    }
} 

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const editTask = (id, task) => {
    return {
        type: EDIT_TASK,
        payload: { id, task }
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}