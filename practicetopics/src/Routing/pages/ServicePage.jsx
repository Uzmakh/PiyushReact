
import { useNavigate } from 'react-router-dom'

const ServicePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      I am Services Page
      <button onClick={() => {
        navigate("/login")
      }}>Login</button>
    </div>
  )
}

export default ServicePage
