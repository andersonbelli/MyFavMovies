import React, { useState, useEffect } from "react";

import Slider from '../Slider/Slider';

import { searchMovie } from '../../Controller/MoviesList';

import Container from 'react-bootstrap/Container';

import { useLocation } from "react-router-dom";

function SearchPage() {
	const location = useLocation();
	const [searchedMovies, setSearch] = useState([]);

	let title = "Search";

	if (location.search != undefined) {
		title = location.search.substr(3).toUpperCase();
	} else {
		delete location.state;
	}

	const settingSearchedMovies = ((value) => {
		if (value !== undefined) {
			let searchedList = [];

			for (let i = 0; i < value.length; i++) {
				searchedList.push(
					{
						"_id": value[i].imdbID,
						"title": value[i].Title,
						"release_date": value[i].Year,
						"image_url": value[i].Poster,
					}
				);
			}
			return searchedList;
		}
		return null;
	});

	useEffect(() => {

		if (location.state != undefined) {
			if (location.state.searched != null) {
				setSearch(settingSearchedMovies(JSON.parse(location.state.searched)));
			} else {
				setSearch(null);
			}
		} else {
			searchMovie(location.search.substr(3)).then((res) => {
				if (res !== undefined) {
					setSearch(settingSearchedMovies(res));
				} else {
					setSearch(null);
				}
			});
		}
	}, [location.state]);

	return (
		<Container>
			<Slider title={title} movies={searchedMovies} />
		</Container>
	);
};

export default SearchPage;