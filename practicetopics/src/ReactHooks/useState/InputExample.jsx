import { useState } from 'react'

const InputExample = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name||"Guest" }</p>
    </div>
  )
}

export default InputExample
