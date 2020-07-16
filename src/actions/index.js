import * as types from './../constants/ActionTypes';

export const addTask = (task)=>{
    return {
        type:types.ADD_TASK,
        task
    }
}
export const getAllTask = ()=>{
    return {
        type : types.GET_ALL_TASK
    }
}

export const getPost = ()=>{
    return {
        type : types.GET_POST
    }
}

export const deletePost = (idPost)=>{
    return {
        type : types.DELETE_POST,
        idPost
    }
}
export const addPost = (post)=>{
    return {
        type : types.ADD_POST,
        post
    }
}
export const changeStatus = ()=>{
    return{
        type : types.CHANGE_STATUS
    }
}