import React from 'react'
import { Button, Container } from "react-bootstrap";
import BtnCard from "./BtnCard.jsx";
import Crousal from "./Crousal.jsx";
import HomeStyle from "./home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<Container>
			<Container style={{ marginTop: "200px", display: "block" }}>
				<div className={HomeStyle.div1}>
					<div className={HomeStyle.div1div1}>
						<h1 className={HomeStyle.div1h}>
							Everything you need to run your
							freelance business.
						</h1>
						<p className={HomeStyle.div1p}>
							Bonsai all-in-one product suite with
							smart automation lets you focus on
							your passion, not your paperwork.
						</p>
						<div
							style={{
								marginTop: "40px",
								borderRadius: "18px",
								// border: "2px solid red",
							}}>
							{/* <input
								style={{
									height: "80px",
									boder: "2px solid #00b289",
									width: "60%",
									borderRight: "none",
									alignItems: "left",
								}}
								type="email"
								palceholder="Enter your email"
							/> */}
							<Button
								as={Link}
								to="/signup"
								variant="success"
								size="lg"
								style={{
									size: "50px",
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
								{/* <Link to="/signup">Start Free</Link> */}
								<h4>Start Free</h4>
							</Button>
						</div>
					</div>
					<div className={HomeStyle.div1div2}>
						<img
							style={{ objectFit: "cover" }}
							src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png"
							alt="img"
						/>
					</div>
				</div>
			</Container>
			<Container>
				<div className={HomeStyle.div2}>
					<div className={HomeStyle.div2div1}>
						<h1
							className={HomeStyle.head1}
							style={{ fontFamily: "sans-sarif" }}>
							Make more, manage less
						</h1>
						<p className={HomeStyle.para}>
							Bonsai integrates and automates every
							step of your business so <br /> it
							runs seamlessly - from proposal to tax
							season.
						</p>
					</div>
					<div className={HomeStyle.imgCont}>
						<div>
							<div>
								<h1
									className={
										HomeStyle.head1
									}
									style={{
										color: "black",
									}}>
									Without Bonsai
								</h1>
							</div>
							<div className={HomeStyle.imgDiv}>
								<img
									src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg"
									alt="WithoutBonsai"
								/>
							</div>
						</div>
						<div>
							<div>
								<h1
									className={
										HomeStyle.head1
									}
									style={{
										color: "black",
									}}>
									With Bonsai
								</h1>
							</div>
							<div className={HomeStyle.imgDiv}>
								<img
									src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg"
									alt="withBonsai"
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container
				style={{
					marginTop: "80px",
					boxSizing: "border-box",
					height: "610px",
				}}>
				<BtnCard />
			</Container>
			<Container>
				<div style={{ marginTop: "60px" }}>
					<h1
						className={HomeStyle.head1}
						style={{ fontFamily: "sans-sarif" }}>
						Trusted by 500K+ self-employed workers{" "}
						<br /> and small businesses
					</h1>
					<p
						className={HomeStyle.para}
						style={{
							color: "black",
							fontSize: "20px",
							marginTop: "20px",
							marginBottom: "60px",
						}}>
						Whether you’re just getting started or your
						business is <br /> booming, Bonsai has you
						covered.
					</p>
				</div>
				<div className={HomeStyle.globalWork}>
					<div className={HomeStyle.globalWorkIn}>
						<div>
							<img
								src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"
								alt="work"
							/>
						</div>
						<div>
							<h2
								style={{
									color: "black",
									fontWeight: "700",
								}}>
								Built for All Work Types
							</h2>
						</div>
						<div>
							<h5>
								We proudly back people with
								<br />
								wide-ranging businesses—from
								<br />
								design and marketing to <br />
								development, writing, and <br />
								photography.
							</h5>
						</div>
					</div>
					<div className={HomeStyle.globalWorkIn}>
						<div>
							<img
								src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"
								alt="global"
							/>
						</div>
						<div>
							<h2
								style={{
									color: "black",
									fontWeight: "700",
								}}>
								Built for Global Businesses
							</h2>
						</div>
						<div>
							<h5>
								Bonsai has international
								coverage <br /> across the
								United States, Canada, UK,{" "}
								<br /> Australia and more, with
								180 <br /> currencies supported.
							</h5>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div
					style={{
						marginTop: "60px",
						marginBottom: "60px",
						textAlign: "center",
					}}>
					<h1 className={HomeStyle.head1}>
						Don't just take it from us.
					</h1>
				</div>
			</Container>
			<Container>
				<div className={HomeStyle.grow}>
					<div>
						<h1>It’s your business.</h1>
						<h1>We’re here to help it grow.</h1>
					</div>
					<div style={{ textAlign: "center" }}>
						<Button
							as={Link}
							to="/signup"
							variant="success"
							size="lg"
							style={{
								size: "50px",
								marginLeft: "17px",
								padding: "12px 27px 9px",
								border: "1px solid #00b289",
								borderRadius: " 4px",
								backgroundColor: "#00b289",
								color: " #fff",
								fontSize: "13px",
								// lineHeight: "16px",
								fontWeight: " 700",
								textAlign: "center",
								letterSpacing: "2px",
								textTransform: "uppercase",
							}}>
							{/* <Link to="/signup">Start Free</Link> */}
							<h4>Start Free</h4>
						</Button>
					</div>
				</div>
				{/* <RCard /> */}
			</Container>
			<Container>{/* <Crousal /> */}</Container>
		</Container>
	);
};

export default Home