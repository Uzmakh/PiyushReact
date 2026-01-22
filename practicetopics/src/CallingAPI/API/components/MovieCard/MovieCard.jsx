import './MovieCard.css'

function MovieCard({ data }) {
  const { Poster, imdbID } = data;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} alt={imdbID} className="poster" />
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
