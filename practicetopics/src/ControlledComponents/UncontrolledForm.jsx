import { useRef } from 'react'

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("Name:", nameRef.current.value);
     console.log("Email:", emailRef.current.value);
     console.log("Password:", passwordRef.current.value);
   };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>

      <input type="text" ref={nameRef} placeholder="Name" />
      <br /><br />
      <input type="email" ref={emailRef} placeholder="Email" />
      <br /><br />

      <input type="password" ref={passwordRef} placeholder="Password" />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm
