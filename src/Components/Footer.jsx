import React from 'react'
import { Link } from "react-router-dom";
import Styles from "./footer.module.css";
const Footer = () => {
	return (
		<div className={Styles.container} style={{}}>
			<div>
				<h3>PRODUCTS</h3>
				<li>Proposals</li>
				<li>Contracts</li>
				<li>Invoicing</li>
				<li>Client CRM</li>
				<li>Time Tracking</li>
				<li>Forms</li>
				<li>Accounting</li>
				<br />
				<Link
					style={{
						color: "green",
						textDecoration: "none",
						display: "flex",
						alignItems: "flex-start",
					}}
					to="/pricing">
					Pricing
				</Link>
				<li>Bonsai Reviews</li>
			</div>
			<div>
				<h3>FREE RESOURCES</h3>

				<li>Freelance Resources</li>
				<li>Freelance Blog by Bonsai</li>
				<li>How to Write a Contract</li>
				<li>Online Signature Maker</li>
				<li>Self-Employed Taxes Hub</li>
				<li>Self-Employed Tax Calculator</li>
				<li>Self-Employed Tax Deductions</li>
			</div>
			<div>
				<h3>BONSAI</h3>

				<li>About</li>
				<li>Careers</li>
				<li>Support</li>
				<li>LinkedIn</li>
				<li>Twitter</li>
				<li>Privacy policy</li>
				<li>Legal</li>
			</div>
		</div>
	);
};

export default Footer