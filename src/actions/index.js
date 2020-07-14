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

export const getPost = (posts)=>{
    return {
        type : types.GET_POST,
        posts
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