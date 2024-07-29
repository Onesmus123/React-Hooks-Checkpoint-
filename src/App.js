// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Routes, and Route from react-router-dom
import MovieList from './MovieList';
import Filter from './Filter';
import Header from './Header';
import Footer from './Footer';
import MovieDescription from './MovieDescription'; // Import the MovieDescription component
import './App.css';

const App = () => {
    const initialMovies = [
        {
            title: "Nairobi Half Life",
            description: "Nairobi Half Life is a 2012 Kenyan drama film directed by David Tosh Gitonga.",
            posterURL: "/images/HalfLife.jpg",
            rating: 8.8,
            longDescription: "Nairobi Half Life tells the story of a young aspiring actor who moves to Nairobi to try and make it in the big city. Through a series of unfortunate events, he ends up joining a gang and getting involved in criminal activities.",
            trailerLink: "https://www.youtube.com/embed/nRjBLAnx2jU?si=jmz6cSuIEjekTaXv" // Updated trailer link
        },
        {
            title: "Disconnect",
            description: "A romantic comedy that brings out the intricacies and absurdities of the Nairobi dating scene.",
            posterURL: "/images/Disconnect.jpg",
            rating: 8.7,
            longDescription: "Disconnect is a hilarious romantic comedy that highlights the dating challenges in Nairobi. The film follows the lives of different characters as they navigate through the highs and lows of modern-day dating.",
            trailerLink: "https://www.youtube.com/embed/Q-xwJT7Tzb8?si=IS-jCjGV5Kv6aL1Q" // Updated trailer link
        },
        {
            title: "Kati Kati",
            description: "Kati Kati is a 2016 Kenyan drama film directed by Mbithi Masya.",
            posterURL: "/images/KatiKati.jpg",
            rating: 8.6,
            longDescription: "Kati Kati is a thought-provoking drama about a young woman who wakes up in the afterlife and meets other souls who are stuck there. The film explores themes of redemption and coming to terms with one's past.",
            trailerLink: "https://www.youtube.com/embed/BAxK1RRyul0?si=IA4OS-jR0w51qDJA" // Updated trailer link
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
        <Router> {/* Wrap the app in Router */}
            <div className="app">
                <Header />
                <Routes> {/* Use Routes to handle different routes */}
                    <Route path="/" element={(
                        <>
                            <p className="intro-text">Top Kenyan Movies 2024</p>
                            <Filter onFilter={handleFilter} />
                            <button onClick={handleAddMovie}>Add Movie</button>
                            <MovieList movies={filteredMovies} />
                        </>
                    )} />
                    <Route path="/movie/:title" element={<MovieDescription movies={movies} />} /> {/* Route for the movie description page */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
