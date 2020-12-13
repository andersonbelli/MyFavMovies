import React, { useState, useEffect } from 'react';

import './SearchBox.css';

import { searchMovie } from '../../Controller/MoviesList';

// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import FormGroup from 'react-bootstrap/esm/FormGroup';

import { useHistory } from "react-router-dom";

function SearchBox(props) {

	const history = useHistory();

	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			searchMovie(searchBoxValue.current.value).then((res) => {
				if (res !== undefined) {
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
		// <FormGroup className="ml-lg-1 searchControl">
		// 	{/* <FormControl type="text" placeholder="Search a movie..." className="m-1" ref={searchBoxValue} default="avengers" /> */}
		// 	<FormControl type="text" placeholder="Search a movie..." ref={searchBoxValue} default="avengers" />

		// 	<Button className="searchButton" disabled={isLoading} variant="outline-warning" onClick=
		// {() => {
		// 		setLoading(true);
		// 	}}>{isLoading ? 'Loading…' : 'Search'}</Button>
		// </FormGroup >

		// <form className="ml-lg-3" onsubmit="event.preventDefault()" role="search">
		<form className="ml-lg-3" onSubmit={() => {
			setLoading(true);
		}}
			role="search">
			<input id="search" type="search" placeholder="Search..." ref={searchBoxValue} defaultValue="avengers" autoFocus />
			<button type="submit" id="buttonS" disabled={isLoading}>
				{isLoading ?
					'Loading…' :
					// <i class="material-icons">
					<i>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="iconSearch" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
							<path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
						</svg>
					</i>
				}

			</button>
		</form>
	);
};

export default SearchBox;

