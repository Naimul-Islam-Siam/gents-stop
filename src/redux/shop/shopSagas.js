import { takeLatest, call, all, put } from 'redux-saga/effects';
import ShopActionTypes from './shopTypes';
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions';


export function* fetchCollectionsAsync() {
   try {
      const collectionRef = firestore.collection('collections');

      const snapshot = yield collectionRef.get();

      const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); // call takes a function as the first argument and the parameter of that function as the second argument

      yield put(fetchCollectionsSuccess(collectionsMap)); // put works as dispatch in saga
   } catch (error) {
      yield put(fetchCollectionsFailure(error.message));
   }

   // ========================== thunk implementation ==========================
   // collectionRef.get()
   //    .then(snapshot => {
   //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
   //       dispatch(fetchCollectionsSuccess(collectionsMap)); // isFetching = false
   //    })
   //    .catch(error => {
   //       dispatch(fetchCollectionsFailure(error.message));
   //    })
};

export function* fetchCollectionsStart() {
   yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};


export function* shopSagas() {
   yield all([call(fetchCollectionsStart)]);
};