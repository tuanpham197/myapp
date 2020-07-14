import * as types from '../constants/ActionTypes';

var initialState = []

const post = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POST:
            state = action.json;
            return [...state];  
        case types.DELETE_POST:
            const index = state.findIndex(element => element.id == action.idPost);
            state.splice(index,1);
            return [...state]
        default:
            return [...state]
    }
};
export default post;
