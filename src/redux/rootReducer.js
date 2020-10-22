import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart'] // as user reducer is handled by firebase
};

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);