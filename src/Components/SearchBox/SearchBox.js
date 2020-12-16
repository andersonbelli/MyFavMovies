import React, { useState, useEffect } from 'react';

import './SearchBox.css';

import { searchMovie } from '../../Controller/MoviesController';

import Button from 'react-bootstrap/Button';

import { useHistory } from "react-router-dom";

function SearchBox() {
	let searchBoxValue = React.createRef();

	const history = useHistory();

	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			searchMovie(searchBoxValue.current.value.toString()).then((res) => {
				if (res !== undefined) {
					if (history.location.pathname === "/search") {
						history.push({ pathname: '/search', search: `?s=${searchBoxValue.current.value}`, state: { searched: JSON.stringify(res) } });
					} else {
						history.replace({ pathname: '/search', search: `?s=${searchBoxValue.current.value}`, state: { searched: JSON.stringify(res) } });
					}
				} else {
					history.replace({ pathname: '/search', search: `?s=${searchBoxValue.current.value}`, state: { searched: null } });
				}
				setLoading(false);
			});
		}
	}, [isLoading]);

	return (
		<form className="ml-lg-3" id="searchForm">
			<input id="search" type="search" placeholder="Search..." ref={searchBoxValue} defaultValue="avengers" />
			<Button className="button" disabled={isLoading} variant="outline-warning"
				onClick=
				{() => {
					setLoading(true);
				}}>{isLoading ?
					<i>
						<svg xmlns="http://www.w3.org/2000/svg"
							style={{ margin: "auto", background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0%", display: "block", "shape-rendering": "crispedges" }}
							width="27" height="27" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
							<circle cx="50" cy="50" fill="none" stroke="#000000" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
								<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
							</circle>
						</svg>
					</i>
					:
					<i>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="iconSearch" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
							<path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
						</svg>
					</i>
				}
			</Button>
		</form >
	);
};

export default SearchBox;

