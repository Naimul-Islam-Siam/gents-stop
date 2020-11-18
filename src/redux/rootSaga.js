import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';


export default function* rootSaga() {
   yield all([call(shopSagas), call(userSagas), call(cartSagas)]);

   // we are using all instead of writing
   // yield fetchCollectionsStart()
   // yield fetchCollectionsStart()
   // yield fetchCollectionsStart()
   // because here 2nd one will depend on the first one to be resolved
   // 3rd one will wait for the 2nd one to complete
   // but we want them to initialize as soon as possible, that't why all is used
};