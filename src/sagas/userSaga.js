import {put,takeLatest} from "redux-saga/effects";

function* addUser() {
    yield put( {type:'ADD_USERS_SUCCESS', payload:'user saved successfully'});
}

export default function* userSaga() {
    yield takeLatest('ADD_USER',addUser);
};