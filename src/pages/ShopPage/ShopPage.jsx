import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from './../../redux/shop/shopActions';
import CollectionOverviewContainer from './../../components/CollectionOverview/CollectionOverviewContainer';
import CollectionPageContainer from './../CollectionPage/CollectionPageContainer';


class ShopPage extends React.Component {
   componentDidMount() {
      const { fetchCollectionsStart } = this.props;
      fetchCollectionsStart(); // asynchronous event now happens inside redux instead of component
   }

   render() {
      const { match } = this.props;

      return (
         <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
         </div>
      );
   }
};


const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);