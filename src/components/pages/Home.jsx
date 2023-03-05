import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_news } from "../../config/state/newsReducer";
import Article from "./Article";

export const Home = () => {
	const dispatch = useDispatch();
	const { entities, loading } = useSelector((state) => state.news);
	console.log("article", entities);
	useEffect(() => {
		dispatch(fetch_news());
	}, [dispatch]);
	const renderArticles = () => {
		const data = entities[0]?.map((article) => {
			return <Article key={article.title} article={article} />;
		});
		return data;
	};

	return <>{renderArticles()}</>;
};
