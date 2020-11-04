import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import { updateCollections } from './../../redux/shop/shopActions';
import WithSpinner from './../../components/WithSpinner/WithSpinner';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
   state = {
      loading: true
   };

   unsubscribeFromSnapshot = null;

   componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async snapshot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
         updateCollections(collectionsMap);
         this.setState({ loading: false });
      });
   }

   render() {
      const { match } = this.props;
      const { loading } = this.state;

      return (
         <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
         </div>
      );
   }
};


const mapDispatchToProps = dispatch => ({
   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);