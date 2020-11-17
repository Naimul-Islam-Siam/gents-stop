import { userActionTypes } from './userTypes';


export const googleSigninStart = () => ({
   type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSigninStart = (emailAndPassword) => ({
   type: userActionTypes.EMAIL_SIGN_IN_START,
   payload: emailAndPassword
});

export const signinSuccess = (user) => ({
   type: userActionTypes.SIGN_IN_SUCCESS,
   payload: user
});

export const signinFailure = (error) => ({
   type: userActionTypes.SIGN_IN_FAILURE,
   payload: error
});

export const checkUserSession = () => ({
   type: userActionTypes.CHECK_USER_SESSIOON
});