// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () => {
    const initialMovies = [
        {
            title: "Nairobi Half Life",
            description: "Nairobi Half Life is a 2012 Kenyan drama film directed by David Tosh Gitonga.",
            posterURL: "/images/HalfLife.jpg",
            rating: 8.8
        },
        {
            title: "Disconnect",
            description: "A romantic comedy that brings out the intricacies and absurdities of the Nairobi dating scene.",
            posterURL: "/images/Disconnect.jpg",
            rating: 8.7
        },
        {
            title: "Kati Kati",
            description: "Kati Kati is a 2016 Kenyan drama film directed by Mbithi Masya.",
            posterURL: "/images/KatiKati.jpg",
            rating: 8.6
        }
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [filteredMovies, setFilteredMovies] = useState(initialMovies);

    const handleAddMovie = () => {
        const title = prompt("Enter movie title");
        const description = prompt("Enter movie description");
        const posterURL = prompt("Enter movie poster URL");
        const rating = parseFloat(prompt("Enter movie rating"));

        if (title && description && posterURL && !isNaN(rating)) {
            const newMovie = { title, description, posterURL, rating };
            setMovies([...movies, newMovie]);
            setFilteredMovies([...movies, newMovie]);
        } else {
            alert('Invalid input');
        }
    };

    const handleFilter = ({ title, rating }) => {
        const filtered = movies.filter(movie => {
            return (
                (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
                (rating ? movie.rating >= rating : true)
            );
        });
        setFilteredMovies(filtered);
    };

    return (
        <div className="app">
            <Header />
            <p className="intro-text">Top Kenyan Movies 2024</p>
            <Filter onFilter={handleFilter} />
            <button onClick={handleAddMovie}>Add Movie</button>
            <MovieList movies={filteredMovies} />
            <Footer />
        </div>
    );
};

export default App;
