import { Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../Context/AuthContext.jsx";
const NavbarPage = () => {
	const { state, handleLogout } = useContext(AuthContext);

	const { isAuth } = state;
	// let name = "Login";

	// useEffect(() => {
	// 	{
	// 		 name = isAuth ? "Logout" : "Login";
	// 	}
	// 	console.log(name);
	// }, [isAuth]);

	const handleout = (isAuth) => {
		if (isAuth) {
			// isAuth = !isAuth;
			handleLogout();

			// console.log(name);
			// console.log("isAuth", isAuth);
		}
		return;
	};
	return (
		<div>
			<Navbar bg="white" expand="lg">
				<Container
					style={{
						display: "flex !important",
						// gap: "300px",
						fontSize: "25px",
						justifyContent: "space-around !important",
					}}>
					<Navbar.Brand as={Link} to="/">
						<img
							src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
							alt="Logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown
								title="Products"
								id="basic-nav-dropdown"
								renderMenuOnMount={true}>
								<NavDropdown.Item
									as={Link}
									to="/products">
									Bonsai Workflow
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Bonsai Tax
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Bonsai Cash
								</NavDropdown.Item>
								{/* <NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item> */}
							</NavDropdown>
							<NavDropdown
								title="Templets"
								id="basic-nav-dropdown"
								renderMenuOnMount={true}>
								<NavDropdown.Item
									as={Link}
									to="/products">
									Contract Templets
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Proposal Templets
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Invoice Templets
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Agreement Templets
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Quote Templets
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Scope of Work Templets
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item
									as={Link}
									to="/products">
									Brief Templets
								</NavDropdown.Item>
								{/* <NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item> */}
							</NavDropdown>
							<Nav.Link as={Link} to="/pricing">
								Pricing
							</Nav.Link>
							<Nav.Link as={Link} to="/reviews">
								Reviews
							</Nav.Link>
						</Nav>
						<Link to="/login">
							<Button
								onClick={() =>
									handleout(isAuth)
								}
								variant="outline-success"
								style={{
									marginLeft: "17px",
									padding: "12px 27px 9px",
									border: "1px solid #00b289",
									borderRadius: " 4px",
									// backgroundColor:
									// 	"#00b289",
									color: " #00b289",
									fontSize: "13px",
									// lineHeight: "16px",
									fontWeight: " 700",
									textAlign: "center",
									letterSpacing: "2px",
									textTransform:
										"uppercase",
								}}>
								{/* LOG IN */}
								{state.isAuth
									? "Logout"
									: "Login"}
								{/* {name} */}
							</Button>
						</Link>
						<Link to="/signup">
							<Button
								variant="success"
								style={{
									marginLeft: "17px",
									padding: "12px 27px 9px",
									border: "1px solid #00b289",
									borderRadius: " 4px",
									backgroundColor:
										"#00b289",
									color: " #fff",
									fontSize: "13px",
									// lineHeight: "16px",
									fontWeight: " 700",
									textAlign: "center",
									letterSpacing: "2px",
									textTransform:
										"uppercase",
								}}>
								Start Free
							</Button>
						</Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarPage;
