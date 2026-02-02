import { useState } from 'react'

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {isVisible && <p>This is a secret message!</p>}

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible?"Hide":"Show"}
        Text</button>
    </div>
  )
}

export default ToggleText
