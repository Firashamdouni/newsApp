import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
	Col,
} from "reactstrap";
const Article = (props) => {
	const { author, description, publishedAt, title, urlToImage, source, url } =
		props.article;
	return (
		<Col>
			<Card className="mb-5">
				<img alt={title} src={urlToImage} />
				<CardBody>
					<CardTitle tag="h5">{title}</CardTitle>
					<CardSubtitle className="mb-2 text-muted" tag="h6">
						{description}
					</CardSubtitle>
					<Link to={url}>go to</Link>
				</CardBody>
			</Card>
		</Col>
	);
};

export default Article;
