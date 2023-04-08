import React from "react";
import "./SignUp.css"
const SignUp = () => {
  return (
    <div className="form">
      <h2>Please Make Your Account</h2>
      <form>
        <div className="input-container">
          <label className='label'>Username </label>
          <input type="text" name="name" className='input-container'/>
        </div> 
         <div className="input-container">
          <label className='label'>Email </label>
          <input type="email" name="email"className='input-container' />
        </div>
        <div className="input-container">
          <label className='label'>Password </label>
          <input type="password" name="password" className='input-container'/>
        </div> 
        <div className="input-container">
          <label  className='label'>Confirm Password </label>
          <input type="password" name="cpassword"className='input-container' />
        </div>
        <div className="container">
        <button  className="button-container"  type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
