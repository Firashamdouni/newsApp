import React from "react";
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
	const { author, description, publishedAt, title, urlToImage, source } =
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
					<Button>go to</Button>
				</CardBody>
			</Card>
		</Col>
	);
};

export default Article;
