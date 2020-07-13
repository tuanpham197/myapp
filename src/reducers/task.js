import * as types from '../constants/ActionTypes';

var data = {
    tasks :[
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
}
const todo = (state = data, action) => {
    
    switch (action.type) {
        case types.ADD_TASK:     
            state = [...state.tasks,action.task];
            return state;  
        case types.GET_ALL_TASK:
            console.log(state,"get all");
            return {...state};              
        default:
            return {...state};
    }
};
export default todo;
