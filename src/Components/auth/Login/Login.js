import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Alert from 'react-bootstrap/Alert'

import { useForm } from "react-hook-form";

import { loginUser } from "../../../Controller/AuthController";

const Link = require('react-router-dom').Link;

function Login() {
	const [message, setMessage] = useState();
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data, e) => {
		setMessage({
			data: "Validating your data...",
			type: "alert-warning",
		});
		loginUser(data).then((res) => {
			if (res !== undefined) {
				const hasError = "error" in res && res.error != null;

				setMessage({
					data: hasError ? res.error : "Successful Login!",
					type: hasError ? "alert-danger" : "alert-success"
				});

				!hasError && e.target.reset();
			}
		}).catch((e) => {
			console.log(e);

			setMessage({
				data: "Oops, " + e.data.error,
				type: "alert-danger"
			});
		});
	};

	return (
		<Container className="mt-2 d-flex align-self-center" style={{ "minHeight": "500px" }}>
			<Row className="align-self-center w-100">

				<Col className="mx-auto">
					<Jumbotron className="text-center bg-white text-dark">

						<h2>Welcome back 😄</h2>
						<p className="lead">Use the following form to make login.</p>

						<Form className="d-inline-block w-50" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
							<Form.Row className="align-items-center">
								<Col xs="auto" className="w-75 m-auto">

									{message && (
										<Alert
											className={`alert fade show d-flex ${message.type}`}>
											{message.data}
											<span
												aria-hidden="true"
												className="ml-auto cursor-pointer"
												onClick={() => setMessage(null)}
											>
												&times;
            				</span>
										</Alert>
									)}

									<InputGroup className="mb-2">
										<InputGroup.Prepend>
											<InputGroup.Text>&#128100;</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl
											id="inputForEmail"
											name="email"
											type="email"
											className="form-control"
											placeholder="E-mail"
											defaultValue="andersonbelli1012@belli.com"
											ref={register({
												required: {
													value: true,
													message: "Please enter your email address",
												},
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													message: "Enter a valid email address",
												},
												minLength: {
													value: 6,
													message: "Minimum 6 characters are allowed",
												},
												maxLength: {
													value: 255,
													message: "Maximum 255 characters are allowed",
												},
											})}
										/>
									</InputGroup>

									{
										errors.email
										&&
										<Alert variant="danger">
											{errors.email.message}
										</Alert>
									}

									<InputGroup className="mb-2">
										<InputGroup.Prepend>
											<InputGroup.Text>&#128273;</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											type="password"
											name="password"
											className="form-control"
											id="inputForPassword"
											placeholder="Password"
											defaultValue="p@ssw0rd"
											ref={register({
												required: {
													value: true,
													message: "Please enter password",
												},
												minLength: {
													value: 6,
													message: "Minimum 6 characters are allowed",
												},
												maxLength: {
													value: 255,
													message: "Maximum 255 characters are allowed",
												},
											})}
										/>
									</InputGroup>

									{
										errors.password
										&&
										<Alert variant="danger">
											{errors.password.message}
										</Alert>
									}

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