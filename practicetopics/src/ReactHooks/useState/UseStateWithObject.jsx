import { useState } from "react";

const UseStateWithObject = () => {
  const [student, setStudent] = useState({
    name: "Ayesha",
    grade: "A",
    city: "Multan",
  });
  return (
    <div>
      <h2>Name: {student.name}</h2>
      <p>Grade: {student.grade}</p>
      <p>City: {student.city}</p>
      <button
        onClick={() =>
          setStudent({
            ...student,
            city: "Lahore",
          })
        }
      >
        Change City
      </button>
    </div>
  );
};

export default UseStateWithObject;
