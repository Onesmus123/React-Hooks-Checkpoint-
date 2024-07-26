// src/MovieCard.js
import React from 'react';
import './MovieCard.css'; // Import styles for MovieCard

const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
        <div className="movie-card">
            <img className="movie-card-poster" src={posterURL} alt={title} />
            <div className="movie-card-content">
                <h2 className="movie-card-title">{title}</h2>
                <p className="movie-card-description">{description}</p>
                <p className="movie-card-rating">Rating: {rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;
