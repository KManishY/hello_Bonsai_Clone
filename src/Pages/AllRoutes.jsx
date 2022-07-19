import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";
import Pricing from "./Pricing/Pricing.jsx";
import Products from "./Products/Products.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import Signup from "./Signup/Signup.jsx";
import Templets from "./Templets/Templets.jsx";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" elevation={<Home />} />
				<Route path="/products" elevation={<Products />} />
				<Route path="/templets" elevation={<Templets />} />
				<Route path="/pricing" elevation={<Pricing />} />
				<Route path="/reviews" elevation={<Reviews />} />
				<Route path="/login" elevation={<Login />} />
				<Route path="/signup" elevation={<Signup />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
