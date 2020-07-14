import * as types from '../constants/ActionTypes';

var initialState = [
        {
            id : 1,
            name : 'Niên luận',
            status : true
        },
        {
            id : 2,
            name : 'Học ReactJS',
            status : false
        },
        {
            id : 3,
            name : 'Niên luận',
            status : true
        }
    ]

const todo = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:     
            state = [...state,action.task];
            return [...state] 
        case types.GET_ALL_TASK:
            return [...state];             
        default:
            return [...state]
    }
};
export default todo;
