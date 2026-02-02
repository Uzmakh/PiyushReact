import { useState } from "react";

const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    country: "Pakistan",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form with Radio, Checkbox and Select-Options</h2>
      <label>
        Male
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
      </label>
      <label>
        Female
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="Pakistan">Pakistan</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </label>
      <br /> <br />
      <label>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        I agree to the terms and conditions.
      </label>
      <br /> <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;
