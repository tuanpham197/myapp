import { put, takeLatest,takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/ActionTypes';

function* getPost(){ 
    var dataResponse = yield axios.get('https://5f0d135111b7f6001605659d.mockapi.io/post')
        .then(res=>{
            return res;
        })

    yield put({type:'GET_POST',json :dataResponse.data});
}
function* deletePost(data)
{
    axios.delete('https://5f0d135111b7f6001605659d.mockapi.io/post/'+data.idPost)
        .then(res=>{
            console.log(res,"hello");
        });

}
function* addPost(data)
{
    let post = {
        name : "abc",
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
    yield all([
        getPost()
    ]);
 }

