// import { useEffect, useState } from "react";
// import { getPosts, getRandomUser } from "./CallingAPI/API";
import { Board } from "./TicTacToeGame/Board";
import { PostCard } from "./CallingAPI/API/components/PostCard";
import UserCard from "./CallingAPI/API/components/UserCard";
import Movie from "./CallingAPI/API/pages/Movie";
import { Clock } from "./DigitalClock/Clock-1";
// import Clock2 from "./DigitalClock/Clock-2";
import DropDowns from "./DigitalClock/DropDowns/DropDowns";
import Form from "./ControlledComponents/Form";
import "./App.css";

const App = () => {
  // const [data, setData] = useState(null);
  // const [users, setUsers] = useState(null);
  // useEffect(() => {
  //   getPosts().then((posts) => setData(posts));
  // }, []);

  // useEffect(() => {
  //   getRandomUser().then((users) => setUsers(users.results[0]));
  // }, []);

  // const refresh = () => {
  //   getRandomUser().then((users) => setUsers(users.results[0]));
  // };
  // console.log(users);
  return (
    <>
      {/* <h1>Tic Tac Toe Game</h1>
      <Board /> */}
      {/* <div className="container"> */}
        {/* {users && <UserCard data={users} onClick={refresh} />} */}

        {/* {data ? (
          data.map((e) => <PostCard title={e.title} body={e.body} />)
        ) : (
          <p>No data</p>
        )} */}
      {/* </div> */}
      {/* <Movie/> */}
      {/* <Clock /> */}
      {/* <DropDowns/> */}
      <Form/>
    </>
  );
};
export default App;
