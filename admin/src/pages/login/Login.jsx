import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    try {
      e.preventDefault();
      login(dispatch, { email, password });
      toast.success("Login Suceess. You are being redirect to home page", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

   
    } catch (error) {
   
    }
  };
  console.log();
  return (
    <div className="center-item">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form>
        <h2>Login to Dashboard</h2>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" disabled={isFetching} onClick={handleClick}>
          Login
        </button>

        {error && <p style={{ color: "red",marginTop:"20px" }}>Wrong Credentials</p>}
      </form>
    </div>
  );
};

export default Login;
