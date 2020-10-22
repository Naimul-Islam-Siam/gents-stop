import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { connect } from 'react-redux';
import { selectCollections } from './../../redux/shop/shopSelectors';


const ShopPage = ({ collections }) => (
   <div className="shop-page">
      {collections.map(collection => (
         <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
         />
      ))}
   </div>
);

const mapStateToProps = state => ({
   collections: selectCollections(state)
});

export default connect(mapStateToProps)(ShopPage);