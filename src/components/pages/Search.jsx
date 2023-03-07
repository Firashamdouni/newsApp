import React, { useDeferredValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { debounce } from "lodash";
import { fetch_param } from "../../config/state/newsReducer";
const Search = ({ search, handlechange }) => {
	const [searchTerm, setSearchTerm] = useState("");
	// const debouncedSearch = debounce(handlechange, 1000, { immediate: true });
	const [selectedValue, setSelectedValue] = useState("q");
	const dispatch = useDispatch();
	const { choices } = useSelector((state) => state.news);
	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};
	const handleInputChange = (event) => {
		const value = event.target.value;
		setSearchTerm(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const obj = { searchTerm: searchTerm, selectedValue: selectedValue };
		dispatch(fetch_param(obj));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col md="4">
					<Input
						bsSize="sm"
						placeholder="search field"
						className="mb-5"
						onChange={handleInputChange}
						value={searchTerm || ""}
					></Input>
				</Col>
				<Col>
					<div>
						<label htmlFor="dropdown">Select an option:</label>
						<select id="dropdown" value={selectedValue} onChange={handleChange}>
							<option value="">--Please choose an option--</option>
							<option value="q">Keyword</option>
							<option value="sources">source</option>
							<option value="category">categorie</option>
						</select>
						<p>You have selected: {selectedValue}</p>
					</div>
				</Col>
			</Row>
			<Col>
				<Button type="submit">search</Button>
			</Col>
		</Form>
	);
};

export default Search;
