import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from './userTypes';
import { signinSuccess, signinFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './userActions';
import { auth, googleProvider, createUserProfileDoc, getCurrentUser } from './../../firebase/firebase.utils';


export function* getSnapshotFromAuth(userAuth, additionalData) {
   try {
      const userRef = yield call(createUserProfileDoc, userAuth, additionalData);

      const userSnapshot = yield userRef.get();

      yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
   } catch (error) {
      yield put(signinFailure(error));
   }
};



export function* signInWithGoogle() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);

      yield getSnapshotFromAuth(user);
   } catch (error) {
      yield put(signinFailure(error));
   }
};

export function* signInWithEmail({ payload: { email, password } }) {
   try {
      const { user } = yield auth.signInWithEmailAndPassword(email, password);

      yield getSnapshotFromAuth(user);
   } catch (error) {
      yield put(signinFailure(error));
   }
};

export function* isUserAuthenticated() {
   try {
      const userAuth = yield getCurrentUser();

      if (!userAuth) {
         return;
      } else {
         yield getSnapshotFromAuth(userAuth);
      }
   } catch (error) {
      yield put(signinFailure(error));
   }
};

export function* signOut() {
   try {
      yield auth.signOut();
      yield put(signOutSuccess());
   } catch (error) {
      yield put(signOutFailure(error));
   }
};

export function* signUp({ payload: { email, password, displayName } }) {
   try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);

      yield put(signUpSuccess({ user, additionalData: { displayName } }));
   } catch (error) {
      yield put(signUpFailure(error));
   }
};

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
   yield getSnapshotFromAuth(user, additionalData);
};


export function* onGoogleSignInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart() {
   yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* onCheckUserSession() {
   yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* onSignOutStart() {
   yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
   yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
};

export function* onSignUpSuccess() {
   yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
};


export function* userSagas() {
   yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
      call(isUserAuthenticated),
      call(onSignOutStart),
      call(onSignUpStart),
      call(onSignUpSuccess)
   ]);
};