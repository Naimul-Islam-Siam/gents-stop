import { createContext } from 'react';
import SHOP_DATA from './ShopPageData';

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;