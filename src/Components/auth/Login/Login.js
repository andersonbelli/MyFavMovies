import React from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Link = require('react-router-dom').Link;

function Login() {
	return (
		<Container className="mt-2 d-flex align-self-center" style={{ "minHeight": "500px" }}>
			<Row className="align-self-center w-100">
				<Col className="mx-auto">
					<Jumbotron className="text-center bg-white text-dark">

						<h2>Welcome back 😄</h2>
						<p className="lead">Use the following form to make login.</p>

						{/* <Form className="d-inline-block w-auto"> */}
						<Form className="d-inline-block w-50">
							<Form.Row className="align-items-center">
								<Col xs="auto" className="w-75 m-auto">
									<InputGroup className="mb-2">
										<InputGroup.Prepend>
											<InputGroup.Text>&#128100;</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl id="inlineFormInputGroup" placeholder="E-mail" />
									</InputGroup>

									<InputGroup className="mb-2">
										<InputGroup.Prepend>
											<InputGroup.Text>&#128273;</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											type="password"
											id="inputPassword6"
											aria-describedby="passwordHelpInline"
											placeholder="Password"
										/>
									</InputGroup>

									<ButtonToolbar className="justify-content-between">
										<Link to="/user/register" className="btn btn-link">Sign up</Link>
										<Button type="submit" className="mb-2" variant="success">
											<b>Login</b>
										</Button>
									</ButtonToolbar>
								</Col>
							</Form.Row>
						</Form>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;