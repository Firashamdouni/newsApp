import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_news } from "../../config/state/newsReducer";
import Article from "./Article";
import Search from "./Search";
import { Col, Row } from "reactstrap";
import { debounce } from "lodash";

export const Home = () => {
	const dispatch = useDispatch();
	const { entities, loading, input, choices } = useSelector(
		(state) => state.news,
	);
	console.log("choices", choices);
	useEffect(() => {
		dispatch(fetch_news(choices));
	}, [dispatch, choices]);
	const renderArticles = () => {
		const data = entities[0]?.map((article) => {
			return <Article key={article.title} article={article} />;
		});
		return data;
	};

	return (
		<>
			<Row>
				<Col>
					<Search />
				</Col>
			</Row>
			<Row md="4">{renderArticles()}</Row>
		</>
	);
};
