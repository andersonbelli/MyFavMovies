import React, { useState, useEffect } from 'react';

import './SearchBox.css';

import { searchMovie } from '../../Controller/MoviesList';

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';

import { useHistory } from "react-router-dom";

function SearchBox(props) {

	const history = useHistory();

	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			searchMovie(searchBoxValue.current.value).then((res) => {
				if(res !== undefined){
					history.push("/");
				} else {
					alert('Movie not found!');
				}

				setLoading(false);
			});
		}
	}, [isLoading]);
	
	let searchBoxValue = React.createRef();

	return (
		<FormGroup inline className="searchControl">
			<FormControl size="lg" type="text" placeholder="Search a movie..." className="mb-sm-2" ref={searchBoxValue} default="avengers" />

			<Button className="searchButton" block disabled={isLoading} size="lg" variant="outline-warning" onClick={() => {
				setLoading(true);
			}}>{isLoading ? 'Loading…' : 'Search'}</Button>
		</FormGroup >
	);
};

export default SearchBox;