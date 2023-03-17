import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import firebase from "../../config";

const SignUp = () => {
	const navigate = useNavigate();
	const [currentUser, setCurrentUser] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		try {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value);
			setCurrentUser(true);
		} catch (error) {
			alert(error);
		}
	};
	if (currentUser) {
		navigate("/");
	}
	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label for="email">Email</label>
				<input type="email" name="email" placeholder="Email" />
				<label for="password">Password</label>
				<input type="password" name="password" placeholder="Password" />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default SignUp;
