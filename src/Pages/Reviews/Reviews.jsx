import React from 'react'
import { Container } from "@chakra-ui/react";
import Rbox1 from "./Rbox1.jsx";
import RCard from "./RCard.jsx";
const Reviews = () => {
	return (
		<Container maxW="container.lg">
			<Rbox1 />
			<RCard />
		</Container>
	);
};

export default Reviews
