import React from 'react';
// import './CustomButton.scss';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ children, ...otherProps }) => (
   <CustomButtonContainer {...otherProps}>
      {children}
   </CustomButtonContainer>
);

export default CustomButton;