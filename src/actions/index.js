import * as types from './../constants/ActionTypes';

export const addTask = (task)=>{
    return {
        type:types.ADD_TASK,
        task
    }
}