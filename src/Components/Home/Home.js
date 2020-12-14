import React, { useState, useEffect } from 'react';

import '../Home/Home.css'

import { getMoviesRequest, newMovies } from '../../Controller/MoviesList';
import Slider from '../Slider/Slider';

import Container from 'react-bootstrap/Container';


function Home() {
	let title = "Recommendations";

	const [movies, setMovies] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		let myNewMovies = [];

		const moviesList = JSON.parse(localStorage.getItem('myfavmovies'));

		if (moviesList != null && moviesList.length > 0) {
			setMovies(moviesList);
			setLoading(false);
		} else {
			getMoviesRequest().then((res) => {
				if (res !== undefined) {
					myNewMovies = res;
				} else {
					myNewMovies = null;
				}

				setMovies(myNewMovies);
				setLoading(false);
			}).catch((e) => {
				console.log(e);
				myNewMovies = null;
				setMovies(myNewMovies);
				setLoading(false);
			});
		}
	}, [newMovies]);

	return (
		<Container>
			{isLoading ?
				<i>
					<svg xmlns="http://www.w3.org/2000/svg"
						style={{ margin: "auto", background: "rgba(255, 255, 255, 0) none repeat scroll 0% 0%", display: "block", "shape-rendering": "crispedges" }}
						width="27" height="27" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
						<circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
							<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
						</circle>
					</svg>
				</i>
				: <Slider title={title} movies={movies} />}
		</Container>
	);
};

export default Home;