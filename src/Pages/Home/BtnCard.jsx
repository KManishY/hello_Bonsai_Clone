import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import CardTab from "./CardTab.jsx";
import Cstyle from "./BtnCard.module.css";
import CardTab1 from "./CardTab1.jsx";
import { BsFillFileTextFill, BsFolder2Open, BsClock } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { CgMathPercent } from "react-icons/cg";
// import { IoIosArrowForward } from "react-icons/lolo";
// import Sonnet from "../../components/Sonnet";

const BtnCard = () => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={3}>
					<Nav className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="first">
								<Link
									className={Cstyle.link}
									to="#">
									<BsFillFileTextFill />
									{"   "}
									Proposals
									{/* <IoIosArrowForward /> */}
								</Link>
								<hr />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">
								<Link
									className={Cstyle.link}
									to="#">
									<BsFillFileTextFill />{" "}
									Contracts
								</Link>
								<hr />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="third">
								<Link
									className={Cstyle.link}
									to="#">
									<BsFolder2Open /> Client
									CRM
								</Link>
								<hr />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="four">
								<Link
									className={Cstyle.link}
									to="#">
									<BsClock /> Time Tracking
								</Link>
								<hr />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="five">
								<Link
									className={Cstyle.link}
									to="#">
									<AiOutlineFileProtect />{" "}
									Invoice
								</Link>
								<hr />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="six">
								<Link
									className={Cstyle.link}
									to="#">
									<BiNotepad /> Task
									Tracking
								</Link>
								<hr />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="seaven">
								<Link
									className={Cstyle.link}
									to="#">
									<CgMathPercent />{" "}
									Accounting & Taxes
								</Link>
								<hr />
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<CardTab1 />
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<CardTab />
						</Tab.Pane>
						<Tab.Pane eventKey="third">
							<CardTab1 />
						</Tab.Pane>
						<Tab.Pane eventKey="four">
							<CardTab />
						</Tab.Pane>
						<Tab.Pane eventKey="five">
							<CardTab1 />
						</Tab.Pane>
						<Tab.Pane eventKey="six">
							<CardTab />
						</Tab.Pane>
						<Tab.Pane eventKey="seaven">
							<CardTab1 />
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default BtnCard;
