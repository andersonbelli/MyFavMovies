import { BASE_URL, MOVIES, BASE_URL_OMDB } from '../env_variables';

const getMoviesRequest = async (search) => {
	const response = await fetch(BASE_URL + MOVIES);
	const responseJson = await response.json();

	if (responseJson) {
		if (JSON.parse(localStorage.getItem('myfavmovies')) == null) {
			newMovies = responseJson;
			localStorage.setItem('myfavmovies', JSON.stringify(responseJson))

			return newMovies;
		}
	}
};

export { getMoviesRequest };

const searchMovie = async (searchValue) => {
	const url = BASE_URL_OMDB + "&s=\"" + searchValue + "\"";

	console.log(url);

	const response = await fetch(url);
	const responseJson = await response.json();

	if (responseJson.Search) {
		return setMoviesList(responseJson.Search);
	}
};

export { searchMovie };

let newMovies = [];

const setMoviesList = (newMoviesParam) => {
	newMovies = newMoviesParam;

	return newMovies;
};

export { newMovies };