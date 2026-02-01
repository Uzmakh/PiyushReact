const App = () => {
  return (
    <>
      <NetFlixSeries  />
     <NetFlixSeries/>
     <NetFlixSeries/>
     <NetFlixSeries/>
    </>
  );
}
export default App;


const NetFlixSeries = () => {
  // const image = "";
  const name = " Queen of Tears";
  const rating = 8.2;
  const summary = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optioiusto distinctio illum!";
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  }
  return (
    <>
      <h1>Static page in React</h1>
      <img src="hero_img.png" alt="Hero image" width="40%" />
      <h2>Name:{name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Genre:{returnGenre()}</p>
      <p>
        Summary: {summary}
      </p>
    </>
  );
}