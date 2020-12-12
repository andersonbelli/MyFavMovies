import React from "react";

import Container from 'react-bootstrap/Container';

import Slider from '../Components/Slider/Slider'

function FavMovies(props) {

	let movies = [];

	movies.push(
		{
			"_id": "000",
			"title": "Batman Begins",
			"release_date": "15/05/2005",
			"image_url": "https://i.pinimg.com/736x/a4/b5/ec/a4b5ec73f932449e650a80ad7d1df3b3.jpg",
		}
	);
	movies.push(
		{
			"_id": "001",
			"title": "Borat",
			"release_date": "03/11/2006",
			"image_url": "https://img03.mgo-images.com/image/thumbnail?id=1MVbf5e3b86a1c9dedec7cc19efa2823552&ql=70&sizes=310x465",
		}
	);
	movies.push(
		{
			"_id": "002",
			"title": "Catch Me If You Can",
			"release_date": "25/12/2002",
			"image_url": "https://table9mutant.files.wordpress.com/2016/02/img_5939-1.jpeg",
		}
	);

	return (
		<Container>
			<Slider movies={movies} />
		</Container>
	);
};

export default FavMovies;