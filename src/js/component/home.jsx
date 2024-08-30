import React from "react";

//include images into your bundle
import Nav from "./navbar.jsx";
import Middle from "./middle.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<Middle />
			<Footer/>	

		</>	

	);
};


export default Home;
