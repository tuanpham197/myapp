import { all} from 'redux-saga/effects';

function* fetchData(action){ 
    console.log("call api pst");
}
export default function* postSaga() {
    yield all([
        fetchData()
    ]);
 }