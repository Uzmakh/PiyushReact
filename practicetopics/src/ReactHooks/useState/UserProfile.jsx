import { useState } from 'react'
import './UserProfile.css'

const UserProfile = () => {
  const [name, setName] = useState("Guest");
  const [age, setage] = useState(12);
  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <button className="changeBtn" onClick={() => setName("Yahu Baba")}>
        Change Name
      </button>
      <button className="changeBtn" onClick={() => setage(age + 1)}>
        Change Age
      </button>
    </div>
  );
}

export default UserProfile
