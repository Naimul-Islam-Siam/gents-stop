import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from './userTypes';
import { googleSigninSuccess, googleSigninFailure } from './userActions';
import { auth, googleProvider, createUserProfileDoc } from './../../firebase/firebase.utils';

export function* signInWithGoogle() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);

      const userRef = yield call(createUserProfileDoc, user);

      const userSnapshot = yield userRef.get();

      yield put(googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
   } catch (error) {
      yield put(googleSigninFailure(error));
   }
};

export function* onGoogleSignInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* userSagas() {
   yield all([call(onGoogleSignInStart)]);
};