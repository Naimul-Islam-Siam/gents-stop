import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SignUpForm.scss';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { signUpStart } from '../../redux/user/userActions';


const SignUpForm = ({ signUpStart }) => {
   const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
   });

   const { displayName, email, password, confirmPassword } = userCredentials;

   const handleSubmit = async e => {
      e.preventDefault();

      if (password !== confirmPassword) {
         alert("Passwords did not match!");
         return;
      }

      signUpStart({ displayName, email, password });
   };


   const handleChange = e => {
      const { name, value } = e.target;
      setUserCredentials({ ...userCredentials, [name]: value });
   };


   return (
      <div className="sign-up">
         <h2 className="title">I don't have an account</h2>
         <span>Sign up with your email and password</span>
         <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
               name="displayName"
               type="text"
               value={displayName}
               onChange={handleChange}
               label="Display Name"
               required
            />

            <FormInput
               name="email"
               type="email"
               value={email}
               onChange={handleChange}
               label="Email"
               required
            />

            <FormInput
               name="password"
               type="password"
               value={password}
               onChange={handleChange}
               label="Password"
               required
            />

            <FormInput
               name="confirmPassword"
               type="password"
               value={confirmPassword}
               onChange={handleChange}
               label="Confirm Password"
               required
            />

            <CustomButton type="submit">Sign up</CustomButton>
         </form>
      </div>
   );
};


const mapDispatchToProps = dispatch => ({
   signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});


export default connect(null, mapDispatchToProps)(SignUpForm);