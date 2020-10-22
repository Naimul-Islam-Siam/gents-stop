import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart'] // as user reducer is handled by firebase
};

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);