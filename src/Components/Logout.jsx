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
      <h1 className="user_name">
        Welcome, <span>{user.name}</span>
      </h1>
      <button className="logout_button" onClick={e => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
