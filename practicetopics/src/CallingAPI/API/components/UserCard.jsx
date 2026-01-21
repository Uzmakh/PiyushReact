import './UserCard.css'

const UserCard = (props) => {
  console.log(props.data)
  return (
    <div className="user-card">
      <img src={props.data.picture.thumbnail} alt="" className="user-img" />
      <h3>{props.data.gender}</h3>
      <h3>{props.data.dob.age}</h3>
      <h3>
        {props.data.name.first} {props.data.name.last}
      </h3>
      <p>{props.data.email}</p>
      <p>
        {props.data.location.city}, {props.data.location.country}
      </p>
      <p>{props.data.cell}</p>
      <button onClick={props.onClick} className='user-btn'>Refresh User</button>
    </div>
  );
}

export default UserCard
