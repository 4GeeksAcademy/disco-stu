import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();

	const registerHandler = () => {
		navigate('/signup');
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Disco Stu</span>
				</Link>
				<div className="ml-auto">
					<button className="btn btn-primary" onClick={registerHandler}>Register</button>
				</div>
			</div>
		</nav>
	);
};
