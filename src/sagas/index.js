import {cancel, fork, put, takeLatest,takeEvery, all ,delay} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/ActionTypes';
import callApi from '../common/CallApi';
import moment from 'moment';
import postSaga from './postSaga'

function* watchAction1(){
    yield console.log('action1');
    yield console.log('action2');
}
/***
 * call api to get data 
 * 
 ***/
function* fetchData(action){ 
    console.log(action,"call api");
    
    var dataResponse = yield callApi('https://5f0d135111b7f6001605659d.mockapi.io/post','GET');

    if(dataResponse)
        yield put({type:'RECEIVE_POST',json :dataResponse.data});
}
/**
 * 
 */
function* actionWatcher() {
    console.log("receive post -saga");
    yield takeLatest('GET_POST', fetchData);
}
function* deletePost(data)
{
    yield axios.delete('https://5f0d135111b7f6001605659d.mockapi.io/post/'+data.idPost)
        .then(res=>{
            return res
        })
        .catch(error=>{
            console.log(error);
        })
}
/***
 * add new post
 * @param data
 * ***/
function* addPost(data)
{

    let post = {
        name : data.post.username,
        avatar : "anh.png",
        createdAt: moment(data.post.createat._d).format('MM/DD/YYYY')
    };

    callApi('https://5f0d135111b7f6001605659d.mockapi.io/post','POST',post)
    .then(res=>{
        console.log(res,"add");
    })
    .catch(error=>{
        console.log(error);
    })

}

export default function* rootSaga() {
    yield takeEvery(types.DELETE_POST, deletePost);
    yield takeLatest(types.ADD_POST,addPost);
    yield fork(postSaga);
    yield fork(watchAction1);
 
    
    yield all([
        actionWatcher()
    ]);
 }

