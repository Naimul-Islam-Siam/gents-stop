import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';
import { googleSigninStart, emailSigninStart } from './../../redux/user/userActions';


const SignInForm = ({ emailSigninStart, googleSigninStart }) => {
   const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
   const { email, password } = userCredentials;

   const handleSubmit = async e => {
      e.preventDefault();

      emailSigninStart(email, password);
   };

   const handleChange = e => {
      const { value, name } = e.target;
      setUserCredentials({ ...userCredentials, [name]: value }); // [name]: value -> email(name): email(value)
   };

   return (
      <div className="signin">
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>

         <form onSubmit={handleSubmit}>
            <FormInput
               name="email"
               type="email"
               value={email}
               handleChange={handleChange}
               label="Email"
               required
            />

            <FormInput
               name="password"
               type="password"
               value={password}
               handleChange={handleChange}
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
};

const mapDispatchToProps = dispatch => ({
   googleSigninStart: () => dispatch(googleSigninStart()),
   emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignInForm);