import { all} from 'redux-saga/effects';

function* fetchData(action){ 
    yield "action 1";
    yield "action 2";
    yield "action 3";
    yield "action 4";
}
export default function* postSaga() {
    var iterator = fetchData();
    console.log(iterator.next().value);
    yield all([
        fetchData()
    ]);
}