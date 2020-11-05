import { connect } from 'react-redux';
import WithSpinner from './../../components/WithSpinner/WithSpinner';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors';
import CollectionOverview from './CollectionOverview';


const mapStateToProps = state => ({
   isLoading: selectIsCollectionFetching(state), // prop should be named as the container expects it to be, WithSpinner expects "isLoading"
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;