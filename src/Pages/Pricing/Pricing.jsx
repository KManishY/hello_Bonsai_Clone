import React from "react";
import P from "./pricing.module.css";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
const Pricing = () => {
	return (
		<Box>
			<Box>
				<Flex justify="center">
					<Box>
						<Text color="rgb(77,83,90)" fontSize="5xl">
							Plans & Pricing
						</Text>
					</Box>
				</Flex>
				<Box mt={25} style={{ textAlign: "left" }}>
					<Flex gap="7" justify="center" wrap="wrap">
						<Box
							className={P.card}
							bgColor="rgb(250,253,255)">
							<Flex direction="column">
								<Box>
									<div>
										<Text
											m={8}
											fontSize="3xl"
											color="rgb(77,83,90)">
											<b>Starter</b>{" "}
										</Text>
										<Text
											color="rgb(114,118,186)"
											fontSize="xl"
											m={8}
											noOfLines={[
												1, 2, 3,
											]}>
											Ideal for
											freelancers
											and
											contractors
											just starting
											out.
										</Text>
										<Heading
											m={8}
											color="rgb(77,83,90)">
											$ 24 /MONTH
										</Heading>
									</div>
									<hr />
									<div
										style={{
											textDecoration:
												"none",
											marginTop:
												"40px",
											lineHeight:
												"50px",
											paddingLeft:
												"20px",
											color: "rgb(145,153,162)",
											fontSize: "20px",
										}}>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												All
												Templets
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Unlimited
												Clients
												&
												Projects
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Invoicing
												&
												Payments{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Proposals
												&
												Contracts
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Tasks &
												Time
												Tracking
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Client
												CRM{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Expense
												Tracking{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Up to 5
												Project
												Collaborators{" "}
											</Text>
										</Flex>
									</div>
								</Box>
								<Box>
									<Button
										as={Link}
										to="/signup"
										m={6}
										mt={12}
										p={5}
										style={{
											width: "80%",
											height: "60px",
											color: "white",
										}}
										bgColor="rgb(1,175,134)">
										START FREE
									</Button>
								</Box>
							</Flex>
						</Box>
						<Box
							className={P.card}
							bgColor="rgb(250,253,255)">
							<Flex direction="column">
								<Box>
									<div>
										<Text
											m={8}
											fontSize="3xl"
											color="rgb(77,83,90)">
											<b>
												Professional
											</b>{" "}
										</Text>
										<Text
											color="rgb(114,118,186)"
											fontSize="xl"
											m={8}
											noOfLines={[
												1, 2, 3,
											]}>
											Everything a
											growing
											independent
											business needs
											to thrive.
										</Text>
										<Heading
											m={8}
											color="rgb(77,83,90)">
											$ 39 /MONTH
										</Heading>
									</div>
									<hr />
									<div
										style={{
											textDecoration:
												"none",
											marginTop:
												"40px",
											lineHeight:
												"50px",
											paddingLeft:
												"20px",
											color: "rgb(145,153,162)",
											fontSize: "20px",
										}}>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												All
												Templets
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Unlimited
												Clients
												&
												Projects
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Invoicing
												&
												Payments{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Proposals
												&
												Contracts
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Tasks &
												Time
												Tracking
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Client
												CRM{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Expense
												Tracking{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Up to 5
												Project
												Collaborators{" "}
											</Text>
										</Flex>
									</div>
								</Box>
								<Box>
									<Button
										as={Link}
										to="/signup"
										m={6}
										mt={12}
										p={5}
										style={{
											width: "80%",
											height: "60px",
											color: "white",
										}}
										bgColor="rgb(1,175,134)">
										START FREE
									</Button>
								</Box>
							</Flex>
						</Box>
						<Box
							className={P.card}
							bgColor="rgb(250,253,255)">
							<Flex direction="column">
								<Box>
									<div>
										<Text
											m={8}
											fontSize="3xl"
											color="rgb(77,83,90)">
											<b>
												Business
											</b>{" "}
										</Text>
										<Text
											color="rgb(114,118,186)"
											fontSize="xl"
											m={8}
											noOfLines={[
												1, 2, 3,
											]}>
											The perfect
											package for
											small
											businesses and
											agencies.
										</Text>
										<Heading
											m={8}
											color="rgb(77,83,90)">
											$ 79 /MONTH
										</Heading>
									</div>
									<hr />
									<div
										style={{
											textDecoration:
												"none",
											marginTop:
												"40px",
											lineHeight:
												"50px",
											paddingLeft:
												"20px",
											color: "rgb(145,153,162)",
											fontSize: "20px",
										}}>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												All
												Templets
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Unlimited
												Clients
												&
												Projects
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Invoicing
												&
												Payments{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Proposals
												&
												Contracts
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Tasks &
												Time
												Tracking
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Client
												CRM{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Expense
												Tracking{" "}
											</Text>
										</Flex>
										<Flex>
											<img
												width="18px"
												src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
												alt=""
											/>
											<Text ml={2}>
												Up to 5
												Project
												Collaborators{" "}
											</Text>
										</Flex>
									</div>
								</Box>
								<Box>
									<Button
										as={Link}
										to="/signup"
										m={6}
										mt={12}
										p={5}
										style={{
											width: "80%",
											height: "60px",
											color: "white",
										}}
										bgColor="rgb(1,175,134)">
										START FREE
									</Button>
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};

export default Pricing;
