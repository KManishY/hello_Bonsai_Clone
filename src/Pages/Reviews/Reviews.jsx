import React from 'react'
import { Box, Container, Text } from "@chakra-ui/react";
const Reviews = () => {
	return (
		<Box
			style={{
				border: "1px solid red",
				width: "100%",
				height: "400px",
			}}>
			<Container
				maxW="container.sm"
				style={{
					border: "1px solid red",
					width: "100%",
					height: "400px",
				}}>
				<Text fontSize="5xl">Bonsai Reviews</Text>
				<Text fontSize="3xl">
					200,000+ Freelancers Love Bonsai. Here's why.
				</Text>
			</Container>
		</Box>
	);
};

export default Reviews
