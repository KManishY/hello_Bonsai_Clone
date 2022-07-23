import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./CardTab.css";
const CardTab1 = () => {
	return (
		<div className="containerDiv">
			<div className="uprDiv">
				<h1 className="head">Win More Work</h1>
				<p className="para">
					With just a few clicks, you can craft <br />{" "}
					structured proposals with clear <br /> estimates
					to close your deals faster.
				</p>
				<Link
					className="Links"
					style={{
						color: "rgb(1,163,127)",
						textDecoration: "none",
					}}
					to="/products">
					EXPLORE CONTRACTS <BsArrowRight />
				</Link>
			</div>
			<div className="lowDiv">
				<img
					className="img"
					width="550px"
					src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default CardTab1;
