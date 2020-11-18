import { all, call, takeLatest, put } from 'redux-saga/effects';
import { userActionTypes } from './../user/userTypes';
import { resetCart } from './cartActions';


export function* resetCartOnSignOut() {
   yield put(resetCart());
};

export function* onSignOutSuccess() {
   yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, resetCartOnSignOut);
};


export function* cartSagas() {
   yield all([call(onSignOutSuccess)]);
};