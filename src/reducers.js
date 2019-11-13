import {
    ADD_NEW_TASK,
    DISPLAY_ANT_BOOL_FLIP,
    DISPLAY_TASK_INFO_FLIP,
    SET_TASK_SELECTED,
    ADD_NEW_SUBTASK,
    COMPLETE_SUBTASK,
    COMPLETE_TASK
} from './constants';

import { tasks } from './Data/tasks'
import update from 'react-addons-update';

//EditTasks
const initialStateTasks = {
    tasksVar: tasks,
    tasksLength: 0
}

export const editTasks = (state = initialStateTasks, action = {}) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return Object.assign({},
                state,
                {
                    tasksVar: [...state.tasksVar, action.payload],
                    tasksLength: state.tasksLength + 1
                });
        case ADD_NEW_SUBTASK:
            return update(state, {
                tasksVar: {
                    [action.payload.index]: {
                        subtasks: { $set: [...state.tasksVar[action.payload.index].subtasks, ...action.payload.items] }
                    }
                }
            });
        case COMPLETE_SUBTASK:
            return update(state, {
                tasksVar: {
                    [action.payload.index]: {
                        subtasks: {
                            $set:
                                [...state.tasksVar[action.payload.index].subtasks.filter(function (info) {
                                    return info !== action.payload.item
                                })]
                        }
                    }
                }
            });
        case COMPLETE_TASK:
            return update(state, {
                tasksLength:{
                    $set: state.tasksLength-1},
                tasksVar: {
                    $set:
                        [...state.tasksVar.filter(function (info) {
                            return info.name !== action.payload
                        })]
                }
            });
        default:
            return state;
    }
}

//Display ANT Bool
const initialStateDisplayANTBool = {
    displayANTBoolVar: false
}

export const displayANTBool = (state = initialStateDisplayANTBool, action = {}) => {
    switch (action.type) {
        case DISPLAY_ANT_BOOL_FLIP:
            return Object.assign({}, state, { displayANTBoolVar: action.payload })
        default:
            return state;
    }
}

//Display Task Info Bool

const initialStateTaskInfoBool = {
    displayTaskInfoBoolVar: false
}

export const displayTaskInfoBool = (state = initialStateTaskInfoBool, action = {}) => {
    switch (action.type) {
        case DISPLAY_TASK_INFO_FLIP:
            return Object.assign({}, state, { displayTaskInfoBoolVar: action.payload })
        default:
            return state;
    }
}

//Set Task Selected

const initialStateTaskSelected = {
    taskSelectedVar: -1
}

export const setTaskSelected = (state = initialStateTaskSelected, action = {}) => {
    switch (action.type) {
        case SET_TASK_SELECTED:
            return Object.assign({}, state, { taskSelectedVar: action.payload })
        default:
            return state;
    }
}