import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignInPage/SignInPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import CollectionPage from './pages/CollectionPage/CollectionPage';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // if user is signing in
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });

      } else {
        // if user signs out
        setCurrentUser(userAuth); // which will be null
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route exact path='/shop/:collectionId' component={CollectionPage} /> */}
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() => this.props.currentUser ?
              (<Redirect to='/' />) : (<SignInPage />)
            }
          />
        </Switch>
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispath => ({
  setCurrentUser: user => dispath(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);