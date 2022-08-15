import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../feature/user";

const LoginComponents = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "vino", age: 21, email: "vino@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LoginComponents;
