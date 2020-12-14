import React, { useState, useEffect } from 'react';

import '../Home/Home.css'

import { getMoviesRequest, newMovies } from '../../Controller/MoviesList';
import Slider from '../Slider/Slider';

import Container from 'react-bootstrap/Container';


function Home() {
	let title = "Recommendations";

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		let myNewMovies = [];

		getMoviesRequest().then((res) => {
			const moviesList = JSON.parse(localStorage.getItem('myfavmovies'));

			if (moviesList.length > 0) {
				myNewMovies = moviesList;
			} else {
				myNewMovies = null;
			}

			setMovies(myNewMovies);
		}).catch((e) => {
			console.log(e);
			myNewMovies = null;
			setMovies(myNewMovies);
		});
	}, [newMovies]);

	return (
		<Container>
			<Slider title={title} movies={movies} />
		</Container>
	);
};

export default Home;