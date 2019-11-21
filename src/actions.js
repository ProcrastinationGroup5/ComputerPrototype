import {
    ADD_NEW_TASK,
    DISPLAY_ANT_BOOL_FLIP,
    DISPLAY_TASK_INFO_FLIP,
    SET_TASK_SELECTED,
    ADD_NEW_SUBTASK,
    COMPLETE_SUBTASK,
    COMPLETE_TASK,
    DISPLAY_CAL_BOOL_FLIP,
    HELP_BOOL_FLIP,
    INITIAL_HELP_BOOL,
    LOGIN_BOOL_FLIP,
    SET_NAME,
    CREATE_ACCOUNT_BOOL_FLIP,
    ADD_ACCOUNT
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

export const displayCalBoolFlip = (bool) => ({
    type: DISPLAY_CAL_BOOL_FLIP,
    payload: bool
})

export const helpBoolFlip = (bool) => ({
    type: HELP_BOOL_FLIP,
    payload: bool
})

export const initialHelpBoolFlip = (bool) => ({
    type: INITIAL_HELP_BOOL,
    payload: bool
})

export const logInBoolFlip = (bool) => ({
    type: LOGIN_BOOL_FLIP,
    payload: bool
})

export const setName = (name) => ({
    type: SET_NAME,
    payload: name
})

export const createAccountBoolFlip = (bool) => ({
    type: CREATE_ACCOUNT_BOOL_FLIP,
    payload: bool
})

export const addAccount = (account) => ({
    type: ADD_ACCOUNT,
    payload: account
})