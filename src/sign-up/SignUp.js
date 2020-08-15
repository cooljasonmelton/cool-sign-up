import React from 'react';

// styling
import '../App.css';

const SignUp = props => {

  const setClassNames = () => {
    const classArr = ["SignUp cfb"]
    return classArr.join(' ')
  }

  return (
    <div className={setClassNames()}>
      <h1>Create an Account!</h1>
      <form className="sign-up-form cfb">
        <label>
          Name:
          <br/>
          <input />
        </label>
        <label>
          Email:
          <br/>
          <input />
        </label>
        <label>
          Password:
          <br/>
          <input />
        </label>
        <br/>
        <button>
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;
