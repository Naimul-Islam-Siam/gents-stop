import ShopActionsTypes from './shopTypes';
// import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
   type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
   type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
   type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
   payload: errorMessage
});


// export const fetchCollectionsStartAsync = () => {
//    return dispatch => {
//       const collectionRef = firestore.collection('collections');
//       dispatch(fetchCollectionsStart()); // isFetching = true

//       collectionRef.get()
//          .then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSuccess(collectionsMap)); // isFetching = false
//          })
//          .catch(error => {
//             dispatch(fetchCollectionsFailure(error.message));
//          })
//    };
// };