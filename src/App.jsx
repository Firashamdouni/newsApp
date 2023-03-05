import { Col, Container, Row } from "reactstrap";
import "./App.css";
import { Home } from "./components/pages/Home";

function App() {
	return (
		<Container className="bg-light border">
			<Row xs="1" md="4">
				<Home />
			</Row>
		</Container>
	);
}

export default App;
