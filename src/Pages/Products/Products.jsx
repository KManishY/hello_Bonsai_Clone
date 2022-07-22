import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Prod from "./product.module.css";
const Products = () => {
	return (
		<Box>
			<Container mt={20} maxW="container.lg">
				<Flex>
					<Box>
						<Box
							style={{
								// marginLeft: "80px",
								// border: "2px solid black",
								marginTop: "40px",
								paddingLeft: "20px",
								marginRight: "20px",
							}}>
							<Text fontSize="2xl">
								Make proposals that help you win
								more work.
							</Text>

							<Text mt={5} fontSize="">
								Create, send, and track
								proposals online with custom
								packages and electronic
								approvals.
							</Text>
							<div style={{ textAlign: "center" }}>
								<Button
									mt={10}
									as={Link}
									to="/signup"
									style={{
										// height: "80px",
										// width: "40%",
										backgroundColor:
											" #00b289",
										borderRadius: "0",
										color: "white",
									}}>
									START FREE
								</Button>
							</div>
						</Box>
					</Box>
					<Box ml="0">
						<img
							width="650px"
							src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde8fb41ccdaaa08371f6_proposals-graphic-min-p-500.png"
							alt=""
						/>
					</Box>
				</Flex>
			</Container>
			<Container maxW="container.sm">
				<Text
					color="#4c525a"
					fontSize="25px"
					align="center"
					style={{
						fontWeight: "600",
						fontFamily: "sans-serif",
					}}>
					Proposals that create a seamless client experience
					and improve your acceptance rate.
				</Text>
			</Container>
			<Container mt={20} maxW="container.lg">
				<Flex gap={20}>
					<Flex direction="column" w="50%">
						<Box mb={3} mt={3}>
							<img
								src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde8fb41ccd4a128371fd_ill_Templates%20%26%20Branding.svg"
								alt=""
							/>
						</Box>
						<Box mt={3} mb={3}>
							<Text fontSize="2xl">
								Templates & Branding
							</Text>
						</Box>
						<Box mt={3} mb={3}>
							<Text fontSize="">
								Use flexible proposal templates,
								scope of works templates or even
								quotes templates and add your
								own branding and offerings.
							</Text>
						</Box>
					</Flex>
					<Flex direction="column" w="50%">
						<Box mt={3} mb={3}>
							<img
								src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde8fb41ccdb7068371fe_ill_Service%20Packages.svg"
								alt=""
							/>
						</Box>
						<Box mt={3} mb={3}>
							<Text fontSize="2xl">
								Service Packages
							</Text>
						</Box>
						<Box mt={3} mb={3}>
							<Text fontSize="">
								Add single or multiple package
								options to your proposals that
								your clients can choose from.
							</Text>
						</Box>
					</Flex>
					<Flex direction="column" w="50%">
						<Box mt={3} mb={3}>
							<img
								src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde8fb41ccd97488371ff_ill_Instant%20Approval.svg"
								alt=""
							/>
						</Box>
						<Box mt={3} mb={3}>
							<Text fontSize="2xl">
								Instant Approval
							</Text>
						</Box>
						<Box mt={3} mb={3}>
							<Text fontSize="">
								Get notified when your proposal
								is viewed and let clients accept
								it on any device, anywhere.
							</Text>
						</Box>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default Products;
