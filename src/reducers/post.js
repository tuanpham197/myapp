import * as types from '../constants/ActionTypes';

var initialState = []

const post = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POST:
            state = action.json;
            return [...state] 
        case types.RECEIVE_POST:
            return [...state] 
        case types.ADD_POST:
            console.log(action,"hello");
            state = [...state,action.post];
            return [...state] 
        case types.DELETE_POST:
            const index = state.findIndex(element => element.id == action.idPost);
            state.splice(index,1);
            return [...state]
        default:
            return [...state]
    }
};
export default post;
