// src/MovieDescription.js
import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams from react-router-dom
import './MovieDescription.css'; // Import styles for MovieDescription

const MovieDescription = ({ movies }) => {
    const { title } = useParams(); // Get the movie title from the URL parameters
    const movie = movies.find(m => m.title === title); // Find the movie that matches the title

    if (!movie) { // Check if the movie is found
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-description">
            <h1>{movie.title}</h1>
            <p>{movie.longDescription}</p> {/* Display the long description */}
            <iframe width="560" height="315" src={movie.trailerLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> {/* Embed the trailer video */}
            <br />
            <Link to="/" className="back-button">Back to Home</Link> {/* Button to navigate back to the home page */}
        </div>
    );
};

export default MovieDescription;
