
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.css";



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={require("../Img/Logo2.png")} alt="Logo" className="NavLogo" />
			<nav ref={navRef} className="NavItem">
				
				<a href="/">Home</a>
				<a href="#About"> About IIT</a>
				<a href="#textPattern">Test Pattern</a>
				<a href="#registration"> Registration Process</a>
				<a href="#testimonials"> Testimonials</a>
				<a href="#faq">FAQs</a>
				<a href="/login">Login</a>
				<a href="/register">Register</a>

				{/* <a href="/#">About me</a> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
