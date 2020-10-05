import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';
import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignInForm extends React.Component {
   constructor() {
      super();

      this.state = {
         email: '',
         password: ''
      };
   }

   handleSubmit = e => {
      e.preventDefault();
      this.setState({ email: '', password: '' });
   };

   handleChange = e => {
      const { value, name } = e.target;
      this.setState({ [name]: value }); // [name]: value -> email(name): email(value)
   };

   render() {
      return (
         <div className="signin">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name="email"
                  type="email"
                  value={this.state.email}
                  handleChange={this.handleChange}
                  label="Email"
                  required
               />

               <FormInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label="Password"
                  required
               />

               <div className="buttons">
                  <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
               </div>
            </form>
         </div>
      );
   }
};

export default SignInForm;