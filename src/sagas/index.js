import {cancel, fork, put, takeLatest,takeEvery, all ,delay} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/ActionTypes';
import callApi from '../common/CallApi';
import moment from 'moment';
/***
 * call api to get data 
 * 
 ***/
function* fetchData(action){ 
    console.log(action,"call api");
    // yield delay(5000)
    var dataResponse = yield callApi('https://5f0d135111b7f6001605659d.mockapi.io/post','GET');

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
        createdAt: "2020-07-13T03:55:55.185Z"
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

    yield all([
        actionWatcher()
    ]);
 }

