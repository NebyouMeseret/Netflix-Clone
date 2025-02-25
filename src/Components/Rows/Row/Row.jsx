import React, { useEffect, useState } from 'react'
import "./Row.css"
import BaseURL from "../../Utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
            try{
                const request = await BaseURL.get(`${fetchUrl}`);
                setMovies(request.data.results);
            }
            catch(error){
                console.log("error", error);
            }
        })()
    }, [fetchUrl]);



    const handleClick = (movie) => {
        movieTrailer(movie.title || movie.name || movie.original_name)
                .then( (url) => {
                    // console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    // console.log(urlParams);
                    // console.log(urlParams.get('v'));
                    setTrailerURL(urlParams.get("v"));
                    let t = document.getElementById("trailer");
                    t.styles.display = "block";
                });
        // if (trailerURL){
        //     setTrailerURL('')
        // }
        // else{
        //     movieTrailer(movie.title || movie.name || movie.original_name)
        //         .then( (url) => {
        //             // console.log(url);
        //             const urlParams = new URLSearchParams(new URL(url).search);
        //             // console.log(urlParams);
        //             // console.log(urlParams.get('v'));
        //             setTrailerURL(urlParams.get("v"));
        //         });
        // }
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        }
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map( (movie, index) => (
                    <img 
                        onClick={() => handleClick(movie)}
                        key={index} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        title={movie.title || movie.name || movie.original_name}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    />
                ))}
            </div>
             <div 
                id='trailer' 
                className='trailer' 
                style={{ display: trailerURL ? "block" : "none" }} 
                onClick={() => setTrailerURL('')}
            >
                {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
            </div>
        </div>
    )
}

export default Row
