import React from 'react';
import './CollectionPage.scss';
import { connect } from 'react-redux';
import { selectCollectionFromUrl } from './../../redux/shop/shopSelectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';


const CollectionPage = ({ collection }) => {
   const { title, items } = collection;
   console.log(collection);

   return (
      <div className="collection-page">
         <h2 className="title">{title}</h2>
         <div className="items">
            {
               items.map(item => (<CollectionItem key={item.id} item={item} />))
            }
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollectionFromUrl(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);