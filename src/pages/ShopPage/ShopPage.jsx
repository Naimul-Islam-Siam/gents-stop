import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { fetchCollectionsStartAsync } from './../../redux/shop/shopActions';
import WithSpinner from './../../components/WithSpinner/WithSpinner';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
   componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync(); // asynchronous event now happens inside redux instead of component
   }

   render() {
      const { match, isCollectionFetching, isCollectionLoaded } = this.props;

      return (
         <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
         </div>
      );
   }
};

const mapStateToProps = state => ({
   isCollectionFetching: selectIsCollectionFetching(state),
   isCollectionLoaded: selectIsCollectionsLoaded(state)
});

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);