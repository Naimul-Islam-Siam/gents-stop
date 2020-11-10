import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from './userTypes';
import { signinSuccess, signinFailure } from './userActions';
import { auth, googleProvider, createUserProfileDoc } from './../../firebase/firebase.utils';


export function* getSnapshotFromAuth(userAuth) {
   try {
      const userRef = yield call(createUserProfileDoc, userAuth);

      const userSnapshot = yield userRef.get();

      yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
   } catch (error) {
      yield put(signinFailure(error));
   }
};



export function* signInWithGoogle() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);

      getSnapshotFromAuth(user);
   } catch (error) {
      yield put(signinFailure(error));
   }
};

export function* signInWithEmail({ payload: { email, password } }) {
   try {
      const { user } = yield auth.signInWithEmailAndPassword(email, password);

      getSnapshotFromAuth(user);
   } catch (error) {
      yield put(signinFailure(error));
   }
};



export function* onGoogleSignInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithEmail);
};

export function* userSagas() {
   yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
};