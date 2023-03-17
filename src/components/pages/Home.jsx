import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_news } from "../../config/state/newsReducer";
import Article from "./Article";
import Search from "./Search";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth";
import firebase from "../../config.js";

export const Home = () => {
	const dispatch = useDispatch();
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	console.log(currentUser);
	const email = currentUser?.email;
	const { entities, loading, input, choices } = useSelector(
		(state) => state.news,
	);

	useEffect(() => {
		dispatch(fetch_news(choices));
	}, [dispatch, choices]);

	const renderArticles = () => {
		const data = entities[0]?.map((article) => {
			return <Article key={article.title} article={article} />;
		});
		return data;
	};
	const handleLogout = (e) => {
		e.preventDefault();
		firebase.auth().signOut();
	};
	return (
		<>
			<Row>
				<Col>
					{currentUser && (
						<>
							<h1>Welcome! user {email} </h1>
							<button onClick={(e) => handleLogout(e)}>logout</button>
						</>
					)}

					<Search />
				</Col>
			</Row>
			<Row md="4">{renderArticles()}</Row>
		</>
	);
};
