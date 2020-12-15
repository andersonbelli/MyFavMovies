import React from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

const components = {
	"login": Login,
	"register": Register
};

function Auth(props) {

	let MyRedirect = components["login"];

	if (props.location.pathname === "/user/register") {
		MyRedirect = components["register"];
	} else if (props.location.pathname === "/user/login") {
		MyRedirect = components["login"];
	}

	return (
		<MyRedirect></MyRedirect>
	);
};

export default Auth;