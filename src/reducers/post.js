import * as types from '../constants/ActionTypes';

var initialState = {
    post : [],
    loading : false,
    status : false
}

const post = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POST:
            console.log("dang call api!!!");
            state.loading = true;
            return {...state}
        case types.RECEIVE_POST:
            state.post = action.json;
            console.log("da co du lieu");
            state.loading = false;
            return {...state} 
        case types.ADD_POST:
            console.log(action,"hello");
            state.post = [...state.post,action.post];
            state.status = true;
            return {...state}
        case types.DELETE_POST:
            const index = state.post.findIndex(element => element.id == action.idPost);
            state.post.splice(index,1);
            return {...state}
        default:
            return {...state}
    }
};
export default post;
