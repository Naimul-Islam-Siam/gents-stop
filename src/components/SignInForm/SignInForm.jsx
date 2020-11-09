import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';
import { googleSigninStart } from './../../redux/user/userActions';


class SignInForm extends React.Component {
   constructor() {
      super();

      this.state = {
         email: '',
         password: ''
      };
   }

   handleSubmit = async e => {
      e.preventDefault();

      const { email, password } = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);

         // clear form
         this.setState({ email: '', password: '' });
      } catch (error) {
         console.log(error);
      }
   };

   handleChange = e => {
      const { value, name } = e.target;
      this.setState({ [name]: value }); // [name]: value -> email(name): email(value)
   };

   render() {
      const { email, password } = this.state;
      const { googleSigninStart } = this.props;

      return (
         <div className="signin">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name="email"
                  type="email"
                  value={email}
                  handleChange={this.handleChange}
                  label="Email"
                  required
               />

               <FormInput
                  name="password"
                  type="password"
                  value={password}
                  handleChange={this.handleChange}
                  label="Password"
                  required
               />

               <div className="buttons">
                  <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
                  <CustomButton type="button" onClick={googleSigninStart} isGoogleSignIn>Sign in with Google</CustomButton>
               </div>
            </form>
         </div>
      );
   }
};

const mapDispatchToProps = dispatch => ({
   googleSigninStart: () => dispatch(googleSigninStart())
});

export default connect(null, mapDispatchToProps)(SignInForm);