import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/user";

function Login() {
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(login({ name: "테스트", age: 20, email: "test@test.com" }));
  };

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleClickLogout}>Logout</button>
    </div>
  );
}

export default Login;
