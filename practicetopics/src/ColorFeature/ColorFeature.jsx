import React, { useState } from 'react'

const ColorFeature = ({getColor}) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  }
  return (
    <div>
      <input type="text" id='input' aria-label='input' onChange={handleChange} value={activeColor} placeholder='Type color of your choice'/>
    </div>
  )
}

export default ColorFeature;
