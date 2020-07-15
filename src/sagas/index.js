import { put, takeLatest,takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/ActionTypes';
import callApi from '../common/CallApi';

function* fetchData(){ 
    console.log("call api");
    var dataResponse = yield callApi('https://5f0d135111b7f6001605659d.mockapi.io/post','GET');

    yield put({type:'RECEIVE_POST',json :dataResponse.data});
}
function* actionWatcher() {
    console.log("receive post -saga");
    yield takeLatest('GET_POST', fetchData);
}
function* deletePost(data)
{
    axios.delete('https://5f0d135111b7f6001605659d.mockapi.io/post/'+data.idPost)
        .then(res=>{
            console.log(res,"hello");
        });

}
/***
 * add new post
 * @param data
 * ***/
function* addPost(data)
{
    console.log(data.post.createat._d);
    let post = {
        name : data.post.username,
        avatar : "anh.png",
        createdAt: "2020-07-13T03:55:55.185Z"
    };
    axios.post('https://5f0d135111b7f6001605659d.mockapi.io/post', post)
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
}

export default function* rootSaga() {
    yield takeEvery(types.DELETE_POST, deletePost);
    yield takeLatest(types.ADD_POST,addPost);
    //yield takeLatest('GET_POST', fetchData);
    yield all([
        actionWatcher()
    ]);
 }

