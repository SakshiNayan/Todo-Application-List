import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAPI } from "../Context/contextApi";
const SignIn = () => {
  const { loginUser } = useAPI();
  const [state, setstate] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setstate((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleClick = () => {
    loginUser(state);
  };
  return (
    <div className="container">
    <h1>SignIn</h1>
    <div>
      <label>User Name</label>
      <input
        type="text"
        value={state.username}
        onChange={handleChange}
        name="username"
      />
      <label>Password</label>
      <input
        type="password"
        value={state.password}
        onChange={handleChange}
        name="password"
      />
      <button className="btn" onClick={handleClick}>Login</button>
      <Link  to="/signup">Register?</Link>
      </div>
    </div>
  );
};

export default SignIn;