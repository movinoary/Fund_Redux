import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div>
      <h1 class="text-8xl text-center mb-20">
        Welcome,
        <span class="bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent">
          {user.name}
        </span>
      </h1>
      <button
        onClick={e => handleLogout(e)}
        class="text-5xl text-center mb-20 bg-neutral-900"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
