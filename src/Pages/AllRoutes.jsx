import React from "react";
import { Routes, Route } from "react-router-dom";
// import NavbarPage from "../Components/NavbarPage.jsx";
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
			{/* <NavbarPage /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/templets" element={<Templets />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
