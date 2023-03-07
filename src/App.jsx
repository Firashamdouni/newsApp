import { Col, Container, Row } from "reactstrap";
import "./App.css";
import { Home } from "./components/pages/Home";

function App() {
	return (
		<Container className="bg-light border">
				<Home />
		</Container>
	);
}

export default App;
