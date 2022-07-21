import React from 'react'
import {
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	Box,
	Container,
	Heading,
	Text,
	Button,
	Checkbox,
	Spacer,
	Link,
} from "@chakra-ui/react";
import { GoogleButton } from "react-google-button";
const Login = () => {
	return (
		<Box bgColor="rgb(250,252,253)">
			<Container maxW="container.sm" p={2}>
				<Box
					bgColor="white"
					p={20}
					style={{
						marginTop: "100px",
					}}>
					<Text
						fontSize="4xl"
						mb={10}
						style={{ textAlign: "center" }}>
						Sign In
					</Text>
					<GoogleButton
						// w={10}
						style={{
							width: "100%",
							marginBottom: "40px",
							backgroundColor: "white",
							color: "black",
						}}
					/>
					<hr style={{ border: "1px solid black" }} />
					<br />
					<br />
					{/* <Button></Button> */}
					<FormControl>
						<Input
							type="email"
							placeholder="Email"
							required
						/>
						<br />
						<Input
							mt={5}
							mb={5}
							type="password"
							placeholder="Password"
							required
						/>
						<br />
						<Box style={{ textAlign: "center" }}>
							<Checkbox
								colorScheme="green"
								defaultChecked>
								<b>Remember me</b>
							</Checkbox>
						</Box>
					</FormControl>
					<Button
						mt={5}
						style={{ width: "100%" }}
						bgColor="rgb(1,175,134)">
						Login
					</Button>
					<Box mt={10} style={{ textAlign: "center" }}>
						<Link color="#01B3A8" href="#">
							Reset Password
						</Link>
						<br />
						<Link mt={5} color="#01B3A8" href="#">
							Resend Verification Email
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Login