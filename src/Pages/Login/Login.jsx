import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import { Navigate } from "react-router-dom";
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
	const data = JSON.parse(localStorage.getItem("user")) || [];
	// console.log("data", data);
	const [formState, setFormState] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	}
	const auth = useContext(AuthContext);
	function handleSubmit() {
		// console.log("form", formState.email);
		if (data.email === null) {
			console.log("Please Create Your Account");
		} else if (
			formState.email === data.email &&
			formState.password === data.password
		) {
			auth.handleLogin(data.name);
			alert("login success");
			<Navigate to="/" />;
		} else {
			console.log("wrong");
			alert("Please enter the correct details");
		}
	}

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
					<FormControl onSubmit={handleSubmit}>
						<Input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={formState.email}
							required
						/>
						<br />
						<Input
							mt={5}
							mb={5}
							name="password"
							onChange={handleChange}
							value={formState.password}
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

						<Button
							onClick={handleSubmit}
							mt={5}
							style={{ width: "100%" }}
							bgColor="rgb(1,175,134)">
							Login
						</Button>
					</FormControl>
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

export default Login;
