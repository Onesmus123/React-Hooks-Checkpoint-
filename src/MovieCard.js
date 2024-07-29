// src/MovieCard.js
import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${title}`}> {/* Link to the movie description page */}
                <img className="movie-card-poster" src={posterURL} alt={title} />
                <div className="movie-card-content">
                    <h2 className="movie-card-title">{title}</h2>
                    <p className="movie-card-description">{description}</p>
                    <p className="movie-card-rating">Rating: {rating}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
