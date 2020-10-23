import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

const COLLECTION_ID_MAP = {
   shirts: 1,
   sneakers: 2,
   jackets: 3,
   watches: 4,
   haircare: 5
};

export const selectCollectionFromUrl = collectionUrlParam => createSelector([selectCollections],
   collections => collections.find(
      collection =>
         collection.id === COLLECTION_ID_MAP[collectionUrlParam]
   ));