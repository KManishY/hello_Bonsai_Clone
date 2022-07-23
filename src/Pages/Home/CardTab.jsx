import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./CardTab.css";
const CardTab = () => {
	return (
		<div className="containerDiv">
			<div className="uprDiv">
				<h1 className="head">Protect Your Business</h1>
				<p className="para">
					Simply answer a few questions to <br /> generate
					an already vetted contract <br />
					template. Once you hit send, the <br />
					contract can be e-signed in minutes.
				</p>
				<Link
					to="/products"
					className="Links"
					style={{
						color: "rgb(1,163,127)",
						textDecoration: "none",
					}}>
					EXPLORE CONTRACTS <BsArrowRight />
				</Link>
			</div>
			<div  className="lowDiv">
				<img
					className="img"
					src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt-p-500.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default CardTab;
