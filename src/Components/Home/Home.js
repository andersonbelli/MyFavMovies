import React, { useState, useEffect } from 'react';

import '../Home/Home.css'

import Slider from '../Slider/Slider';

import Container from 'react-bootstrap/Container';

import { getMoviesRequest, newMovies } from '../../Controller/MoviesList';

function Home() {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMoviesRequest().then((res) => {

			const moviesList = JSON.parse(localStorage.getItem('myfavmovies'));

			setMovies(moviesList);
		});
	}, []);

	useEffect(() => {
		let myNewMovies = [];

		if (newMovies.length > 0 && "_id" in newMovies) {
			myNewMovies = newMovies;
		} else {
			for (let i = 0; i < newMovies.length; i++) {
				myNewMovies.push(
					{
						"_id": newMovies[i].imdbID,
						"title": newMovies[i].Title,
						"release_date": newMovies[i].Year,
						"image_url": newMovies[i].Poster,
					}
				);
			}
		}

		setMovies(myNewMovies);
	}, [newMovies]);

	return (
		<Container>
			<Slider movies={movies} />
		</Container>
	);
};

export default Home;