import SHOP_DATA from './../../pages/ShopPage/ShopPageData';

const INITIAL_STATE = {
   collections: SHOP_DATA
};


const shopReducer = (state = INITIAL_STATE, actions) => {
   switch (actions.type) {
      default:
         return state;
   }
};


export default shopReducer;
