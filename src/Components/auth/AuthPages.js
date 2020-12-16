import React from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFound from "../NotFound";

const components = {
	"login": Login,
	"register": Register
};

function Auth(props) {
	let MyRedirect = NotFound;

	if (props.location.pathname === "/user/register") {
		MyRedirect = components["register"];
	} else if (props.location.pathname === "/user/login") {
		MyRedirect = components["login"];
	}

	return (
		<MyRedirect />
	);
};

export default Auth;