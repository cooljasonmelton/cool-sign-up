import React, {useState} from 'react';

// styling
import '../App.css';

// components
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

const Container = () => {
  const [welcome, setWelcome] = useState(true)


  const setContainerClass = () => {
    const classArr = ["Container cfb"] 
    return classArr.join(' ')
  }

  const setBannerClass = () => {
    const classArr = ["banner cfb"]
    if (welcome) classArr.push('send-right')
    return classArr.join(' ')
  }

  const setFormClass = () => {
    const classArr = ["form cfb"] 
    if (welcome) classArr.push('send-left')
    return classArr.join(' ')
  }

  return (
    <div className={setContainerClass()}>

      <div className={setBannerClass()}> 
        Banner
        <button onClick={()=>setWelcome(!welcome)}> Sign In </button>
      </div>

      <div className={setFormClass()}> Form </div>

    </div>
  );
}

export default Container;
