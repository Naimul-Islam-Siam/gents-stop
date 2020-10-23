import React from 'react';
import './CollectionOverview.scss';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from './../../redux/shop/shopSelectors';

const CollectionOverview = ({ collections }) => (
   <div className="collection-overview">
      {
         collections.map(collection => (
            <CollectionPreview
               key={collection.id}
               title={collection.title}
               items={collection.items}
            />
         ))
      }
   </div>
);

const mapStateToProps = state => ({
   collections: selectCollectionForPreview(state)
});


export default connect(mapStateToProps)(CollectionOverview);