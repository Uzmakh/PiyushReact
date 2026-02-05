// import { useState } from "react";
// import { getPosts, getRandomUser } from "./CallingAPI/API";
// import { Board } from "./TicTacToeGame/Board";
// import { PostCard } from "./CallingAPI/API/components/PostCard";
// import UserCard from "./CallingAPI/API/components/UserCard";
// import Movie from "./CallingAPI/API/pages/Movie";
// import { Clock } from "./DigitalClock/Clock-1";
// import Clock2 from "./DigitalClock/Clock-2";
// import DropDowns from "./DigitalClock/DropDowns/DropDowns";
// import ColorFeature from "./ColorFeature/ColorFeature";
// import Form from "./ControlledComponents/Form";
// import UseStatePage from "./pages/UseState";
import FormHandlingPage from "./pages/FormHandlingPage";
import CounterApp from "./ContextAPI/Counterfolder/Counter";
import CounterContext from "./ContextAPI/Counterfolder/CounterContext";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./Routing/components/Navbar";
import ServicePage from "./Routing/pages/ServicePage";
import HomePage from "./Routing/pages/HomePage";
import ContactPage from "./Routing/pages/ContactPage";

import "./App.css";
import Login from "./Routing/pages/Login";


const App = () => {
  // const [data, setData] = useState(null);
  // const [users, setUsers] = useState(null);
  // const [UIcolor, setUIcolor] = useState(null);


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
  // const getColor = (color) => {
  //   setUIcolor(color);
  // }
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

      {/* <div
        className="color-container"
        style={{ backgroundColor: `${UIcolor}` }}
      ></div>
      <ColorFeature getColor={getColor} /> */}
      {/* <Form/> */}
      {/* <UseStatePage/> */}
      {/* <FormHandlingPage /> */}

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/form" element={<FormHandlingPage />} />
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/countercontext" element={<CounterContext />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
