import React from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

import './Slider.css';

import Slider from 'react-slick';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import AddFavourites from '../AddFavourites/AddFavourites';
import NotFound from "../NotFound";

function MovieSlider(props) {
	let settings = {
		dot: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: "linear"
	}

	return (
		<Container className="mt-2 d-flex align-self-center" style={{ "minHeight": "500px" }}>
			{ props.movies != null ?
				<Row className="align-self-center w-100">
					<Col className="mx-auto">
						{props.title !== undefined ? <h1 className="lead w-25">{props.title}</h1> : null}
						<Slider {...settings}>
							{
								props.movies.map((movies, _) => (
									<OverlayTrigger
										key="right"
										placement="bottom"
										overlay={
											<Tooltip id={`tooltip-right`} className="mt-2">
												<AddFavourites />
											</Tooltip>
										}
									>
										<div className="card-wrapper">
											<div className="card d-flex justify-cointent-start m-3">
												<div className="card-image">
													<img src={movies.image_url} alt={movies.title} />
												</div>
												<div className="details overlay d-flex align-items-center justify-content-center">
													<h2>{movies.title} <span className="release-date">{movies.release_date}</span></h2>
												</div>
											</div>
										</div>
									</OverlayTrigger>
								))
							}
						</Slider>
					</Col>
				</Row>
				:
				<NotFound headerMessage="No movies found 😔" message="" />
			}
		</Container >
	);
};

export default MovieSlider;

// ... is called spread operator