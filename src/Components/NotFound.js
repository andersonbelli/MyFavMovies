import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NotFound(props) {

	console.log("\n\n----\n\n");
	console.log(props);
	console.log("\n\n----\n\n");

	let headerMessage = "Page not found 😔";
	let message = "The page you are looking for was moved or don't exist.";

	if (props.headerMessage !== undefined) {
		headerMessage = props.headerMessage;
		message = props.message;
	}

	return (
		<Container className="mt-2 d-flex align-self-center" style={{ "minHeight": "500px" }}>
			<Row className="align-self-center w-100">
				<Col className="mx-auto">
					<Jumbotron className="text-center bg-white text-dark">

						<h1>{headerMessage}</h1>
						<p className="lead">{message}</p>

						<Button variant="success" onClick={() => {
							window.location.replace("/");
						}}>Back to Home</Button>

					</Jumbotron>
				</Col>
			</Row>
		</Container>
	);
};

export default NotFound;