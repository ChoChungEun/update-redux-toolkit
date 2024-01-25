import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../redux/theme";

function ChangeColor() {
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleClickColorChange = () => {
    dispatch(changeColor(color));
  };

  return (
    <div>
      <input type="text" onChange={handleColorChange} />
      <button onClick={handleClickColorChange}>CHANGE COLOR</button>
    </div>
  );
}

export default ChangeColor;
