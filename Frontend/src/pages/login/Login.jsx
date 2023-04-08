import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/apiCalls/apiCalls";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <h1 className="Title">SIGN IN</h1>
          <form className="Form">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="Input"
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="Input"
            />
            <button className="Button" disabled={isFetching} onClick={handleLogin}>
              LOGIN
            </button>
            {error && <p className="Error">Wrong Credentials</p>}
         
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
