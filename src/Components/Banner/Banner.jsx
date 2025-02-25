import React, { useEffect, useState } from "react";
import BaseURL from "../Utils/axios";
import requests from "../Utils/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({}); 

  useEffect(() => {
    (async () => {
      try {
        const request = await BaseURL.get(requests.fetchNetflixOriginals);
        const results = request.data.results;

        if (results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        } else {
          console.log("No movies found");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
      document.title = "Home-Netflix";
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  let moviee = null;
  if (!movie) return <div style={{color: "white", textAlign: "center"}}>Loading...</div>;

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 100)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;