import React from 'react';
import './SignUpForm.scss';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { auth, createUserProfileDoc } from './../../firebase/firebase.utils';


class SignUpForm extends React.Component {
   constructor() {
      super();

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      };
   }


   handleSubmit = async e => {
      e.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
         alert("Passwords did not match!");
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password);

         createUserProfileDoc(user, { displayName });

         // clear form
         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
         });

      } catch (error) {
         console.log(error);
      }
   }


   handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
   }


   render() {
      const { displayName, email, password, confirmPassword } = this.state;

      return (
         <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
               <FormInput
                  name="displayName"
                  type="text"
                  value={displayName}
                  onChange={this.handleChange}
                  label="Display Name"
                  required
               />

               <FormInput
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  label="Email"
                  required
               />

               <FormInput
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                  label="Password"
                  required
               />

               <FormInput
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  label="Confirm Password"
                  required
               />

               <CustomButton type="submit">Sign up</CustomButton>
            </form>
         </div>
      );
   }
};

export default SignUpForm;