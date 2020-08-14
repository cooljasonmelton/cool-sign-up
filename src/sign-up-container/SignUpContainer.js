import React from 'react';

// styling
import '../App.css';

// components
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

const SignUpContainer = () => {
  return (
    <div className="SignUpContainer">
        <SignUp/>
        <SignIn/>

    </div>
  );
}

export default SignUpContainer;
