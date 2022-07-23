import React from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";

const Rbox1 = () => {
	return (
		<Flex
			justify="center"
			align="center"
			style={{
				// border: "1px solid red",
				width: "100%",
				height: "400px",
			}}>
			<Flex
				justify="center"
				direction="column"
				align="center"
				maxW="container.sm"
				color="rgb(77,83,117)"
				style={{
					width: "100%",
					height: "400px",
					fontFamily: "sens-serif",
				}}>
				<Text fontSize="5xl">Bonsai Reviews</Text>
				<Text fontSize="3xl">
					200,000+ Freelancers Love Bonsai. Here's why.
				</Text>
				<Text>Last Updated April 21,2021</Text>
			</Flex>
		</Flex>
	);
};

export default Rbox1;
