import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Spinner from './../../components/Spinner/Spinner';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from './../../redux/shop/shopActions';

// dynamic import
const CollectionOverviewContainer = lazy(() => import('./../../components/CollectionOverview/CollectionOverviewContainer'));
const CollectionPageContainer = lazy(() => import('./../CollectionPage/CollectionPageContainer'));


const ShopPage = ({ fetchCollectionsStart, match }) => {
   useEffect(() => {
      fetchCollectionsStart(); // asynchronous event now happens inside redux instead of component
   }, [fetchCollectionsStart]);

   return (
      <div className="shop-page">
         <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
         </Suspense>
      </div>
   );
};


const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);