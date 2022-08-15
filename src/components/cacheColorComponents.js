import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../feature/theme";

const CacheColorComponents = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        CacheColorComponents
      </button>
    </div>
  );
};

export default CacheColorComponents;
