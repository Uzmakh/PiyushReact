// import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { getMovie } from "../../services/GetService";

const Movie = () => {
  // const [movieData, setMovieData] = useState(null);  //for object
  const [movieData, setMovieData] = useState([]); //for array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const API = "http://www.omdbapi.com/?i=tt3896198&apikey=a5677765"; //getting an object

  // const API = "http://www.omdbapi.com/?s=guardians&apikey=a5677765"; //getting an array

  const getMoviesData = async () => {
    try {
      setLoading(true);
      // const response = await axios.get(API);
      // console.log(response);
      // console.log(response.data);

      // Added new line after creating GetService.jsx file,importing axios there(more professional way)
      const response = await getMovie();

      console.log("Response object:", response);
      console.log("Response.data type:", typeof response.data);
      console.log("Response.data:", response.data);
      console.log("Response.data keys:", Object.keys(response.data));

      setMovieData(response.data.Search);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch movie data");
      //Handling Errors with Built-in Axios Features
      console.error("Error message:", error.message);
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  // Handle loading state
  if (loading) {
    return <div>Loading movie data...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle no data state
  if (!movieData) {
    return <div>No movie data available</div>;
  }

  // Render the movie object
  // return (
  //   <>
  //     <h1>Movie Details</h1>
  //     <div>
  //       <h3>{movieData.Title}</h3>
  //       <p>
  //         <strong>Year:</strong> {movieData.Year}
  //       </p>
  //       <p>
  //         <strong>Rated:</strong> {movieData.Rated}
  //       </p>
  //       <p>
  //         <strong>Released:</strong> {movieData.Released}
  //       </p>
  //       <p>
  //         <strong>Runtime:</strong> {movieData.Runtime}
  //       </p>
  //       <p>
  //         <strong>Genre:</strong> {movieData.Genre}
  //       </p>
  //       <p>
  //         <strong>Director:</strong> {movieData.Director}
  //       </p>
  //       <p>
  //         <strong>Actors:</strong> {movieData.Actors}
  //       </p>
  //       <p>
  //         <strong>Plot:</strong> {movieData.Plot}
  //       </p>
  //       {movieData.Poster && movieData.Poster !== "N/A" && (
  //         <img
  //           src={movieData.Poster}
  //           alt={`Poster for ${movieData.Title}`}
  //           style={{ maxWidth: "300px", marginTop: "20px" }}
  //         />
  //       )}
  //     </div>
  //   </>
  // );

  // Render the movie array
  return (
    <ul className="flex">
      {movieData.map((singleMovie) => {
        return <MovieCard key={singleMovie.imdbID} data={singleMovie} />;
      })}
    </ul>
  );
};

export default Movie;
