import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* getPost(){ 
    var dataResponse = yield axios.get('https://5f0d135111b7f6001605659d.mockapi.io/post')
        .then(res=>{
            return res;
        })

    yield put({type:'GET_POST',json :dataResponse.data});
}
// function* actionWatcher()
// {
//     yield takeLastest()
// }
export default function* rootSaga() {
    yield all([
        getPost()
    ]);
 }

