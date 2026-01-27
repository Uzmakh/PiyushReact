import { useState } from "react";
import Clock2 from "../Clock-2";

const DropDowns = () => {
  const [textColor, setTextColor] = useState("black"); //step-2
  const [bgColor, setBgColor] = useState("gray");
  return (
    <div>
      <h1>Digital Clock</h1>
      <label htmlFor="bgtime">Select Block color:</label>
      <select id="bgtime" onChange={(e) => setBgColor(e.target.value)}>
        <option value="#343434">Black</option>
        <option value="red">Red</option>
        <option value="#862ae2">Purple</option>
        <option value="green">Green</option>
        <option value="gray">Gray</option>
      </select>

      <br />
      <br />
      <label htmlFor="time">Select Time color:</label>
      <select id="time" onChange={(e) => setTextColor(e.target.value)}>
        <option value="gray">Gray</option>
        <option value="red">Red</option>
        <option value="#343434">Black</option>
        <option value="#862ae2">Purple</option>
        <option value="green">Green</option>
      </select>
      <Clock2 textColor={textColor} bgColor={bgColor} />
    </div>
  );
};

export default DropDowns;
