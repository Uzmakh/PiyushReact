import { useEffect, useState } from "react";
import { getPosts } from "./CallingAPI/API";
import { Board } from "./TicTacToeGame/Board";
import { PostCard } from "./CallingAPI/API/components/PostCard";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  return (
    <>
      {/* <h1>Tic Tac Toe Game</h1>
      <Board /> */}
      <div>
        {data ? (
          data.map((e) => <PostCard title={e.title} body={e.body} />)
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
};
export default App;
