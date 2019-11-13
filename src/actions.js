import {
    ADD_NEW_TASK,
    DISPLAY_ANT_BOOL_FLIP,
    DISPLAY_TASK_INFO_FLIP,
    SET_TASK_SELECTED,
    ADD_NEW_SUBTASK,
    COMPLETE_SUBTASK,
    COMPLETE_TASK
} from './constants';

export const addNewTask = (form) => ({
    type: ADD_NEW_TASK,
    payload: form
})

export const displayANTBoolFlip = (bool) => ({
    type: DISPLAY_ANT_BOOL_FLIP,
    payload: bool
})

export const displayTaskInfoFlip = (bool) => ({
    type: DISPLAY_TASK_INFO_FLIP,
    payload: bool
})

export const setTaskSelected = (int) => ({
    type: SET_TASK_SELECTED,
    payload: int
})

export const addNewSubtask = (array) => ({
    type: ADD_NEW_SUBTASK,
    payload: array
})

export const completeSubtask = (array) => ({
    type: COMPLETE_SUBTASK,
    payload: array
})

export const completeTask = (str) => ({
    type: COMPLETE_TASK,
    payload: str
})