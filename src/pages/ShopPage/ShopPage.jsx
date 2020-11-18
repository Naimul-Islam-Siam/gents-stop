import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from './../../redux/shop/shopActions';
import CollectionOverviewContainer from './../../components/CollectionOverview/CollectionOverviewContainer';
import CollectionPageContainer from './../CollectionPage/CollectionPageContainer';


const ShopPage = ({ fetchCollectionsStart, match }) => {
   useEffect(() => {
      fetchCollectionsStart(); // asynchronous event now happens inside redux instead of component
   }, [fetchCollectionsStart]);

   return (
      <div className="shop-page">
         <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
         <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
   );
};


const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);