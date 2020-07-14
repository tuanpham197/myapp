import  {combineReducers}  from 'redux'
import task from './task';
import post from './post';


const myReducer = combineReducers({
    task,
    post
});
export default myReducer;