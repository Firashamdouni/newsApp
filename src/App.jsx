import { Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import { Home } from "./components/pages/Home";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import SignUp from "./components/pages/Signup";
import { AuthProvider } from "./Auth";
import { LogIn } from "./components/pages/Login";

function App() {
	return (
		<AuthProvider>
			<Container className="bg-light border">
				<Routes>
					<Route exact path="/" Component={Home}></Route>
					<Route exact path="/login" Component={LogIn}></Route>
					<Route path="/signup" Component={SignUp}></Route>
				</Routes>
			</Container>
		</AuthProvider>
	);
}

export default App;
