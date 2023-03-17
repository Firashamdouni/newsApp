import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Auth";
import firebase from "../../config.js";
import { Link, useNavigate } from "react-router-dom";

export const LogIn = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		try {
			firebase.auth().signInWithEmailAndPassword(email.value, password.value);
		} catch (error) {
			alert(error);
		}
	};
	useEffect(() => {
		if (currentUser) {
			navigate("/");
		}
	}, [currentUser]);

	return (
		<>
			<h1>Log In</h1>
			<form onSubmit={handleSubmit}>
				<label for="email">Email</label>
				<input type="email" name="email" placeholder="Email" />
				<label for="password">Password</label>
				<input type="password" name="password" placeholder="Password" />
				<button type="submit">Submit</button>
				dosnt have a compte ? <Link to="/signup">create a compte</Link>
			</form>
		</>
	);
};
