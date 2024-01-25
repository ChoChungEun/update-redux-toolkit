import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

function Login() {
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(login({ name: "테스트", age: 20, email: "test@test.com" }));
  };

  return (
    <div>
      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
}

export default Login;
