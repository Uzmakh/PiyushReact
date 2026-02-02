import { useState } from "react";

const BasicValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all fields!");
    } else {
      setError("");
      console.log("Form Submitted:", { name, email, password });
      alert("Form submitted successfully!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Form-Validation</h2>

      <input
        type="text"
        name="
      "
        id=""
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        name="
      "
        id=""
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        name="
      "
        id=""
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicValidation;
