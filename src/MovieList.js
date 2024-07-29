// src/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    const movieData = movies || [
        {
            title: "Nairobi Half Life",
            description: "Nairobi Half Life is a 2012 Kenyan drama film directed by David Tosh Gitonga.",
            posterURL: "/images/HalfLife.jpg",
            rating: 8.8,
            trailerLink: "https://www.youtube.com/embed/nRjBLAnx2jU?si=jmz6cSuIEjekTaXv"
        },
        {
            title: "Disconnect",
            description: "A romantic comedy that brings out the intricacies and absurdities of the Nairobi dating scene.",
            posterURL: "/images/Disconnect.jpg",
            rating: 8.7,
            trailerLink: "https://www.youtube.com/embed/Q-xwJT7Tzb8?si=IS-jCjGV5Kv6aL1Q"
        },
        {
            title: "Kati Kati",
            description: "Kati Kati is a 2016 Kenyan drama film directed by Mbithi Masya.",
            posterURL: "/images/KatiKati.jpg",
            rating: 8.6,
            trailerLink: "https://www.youtube.com/embed/BAxK1RRyul0?si=IA4OS-jR0w51qDJA"
        }
    ];

    return (
        <div className="movie-list">
            {movieData.map((movie, index) => (
                <MovieCard
                    key={index}
                    title={movie.title}
                    description={movie.description}
                    posterURL={movie.posterURL}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
};

export default MovieList;
