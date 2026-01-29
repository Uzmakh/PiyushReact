import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [displayData, setDisplayData] = useState("");

  // WITH SEPARATE HANDLERS
  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };

  // OR use a single handler with name attribute
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "firstname") {
  //     setFname(value);
  //   } else if (name === "lastname") {
  //     setLname(value);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData(fname + " " + lname);

    //  clear the form
    setFname("");
    setLname("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{displayData}</p>
        {/* <label htmlFor="fame">
          First Name: */}
        {/* <input type="text" name="fname" id="fname" value='Uzma' /> */}
        {/* <input type="text" name="fname" id="fname" defaultValue='Uzma' /> */}
        {/* <input
            type="text"
            name="fname"
            id="fname"
            value={name}
            onChange={handleChange}
          />
        </label> */}
        <label htmlFor="fname">First Name: </label>

        <input
          type="text"
          name="firstname"
          id="fname"
          value={fname}
          onChange={handleFnameChange}
        />

        <label htmlFor="lname">Last Name: </label>
        <input
          type="text"
          name="lastname"
          id="lname"
          value={lname}
          onChange={handleLnameChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
