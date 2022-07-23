import React from "react";
import {
	Grid,
	GridItem,
	Container,
	Heading,
	Text,
	Box,
	Flex,
} from "@chakra-ui/react";
const data = [
	{
		q: "I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work.",
		name: "Kevin Tudball",
		title: "Illustrator",
		img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		q: "My #1 most used and favourite feature is the contracts, it has everything that I need, easy to customise and it automates invoice creation which saves me time.Bonsai is an efficient, effective, affordable, easy to use and empowering tool that allows me to do more important tasks.",
		name: "Kevin Tudball",
		title: "Illustrator",
		img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		q: "I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work.",
		name: "Kevin Tudball",
		title: "Illustrator",
		img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		q: "I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work.",
		name: "Kevin Tudball",
		title: "Illustrator",
		img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		q: "I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work.",
		name: "Kevin Tudball",
		title: "Illustrator",
		img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	},
	{
		q: "I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work.",
		name: "Kevin Tudball",
		title: "Illustrator",
		img: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	},
];

const RCard = () => {
	return (
		<Grid templateColumns="repeat(2, 1fr)" gap={6}>
			{data.map((e) => (
				<GridItem w="100%" key={e.name}>
					<Box>
						<Flex align="flex-end">
							<img
								style={{
									padding: "20px",
									borderTopRightRadius:
										"50px",
									borderBottomLeftRadius:
										"50px",
									height: "250px",
								}}
								width="200px"
								src={e.img}
								alt="user"
							/>
							<img
								style={{ alignItem: "bottom" }}
								src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
								alt=""
							/>
						</Flex>
						<q
							style={{
								fontSize: "20px",
								marginRight: "200px",
							}}>
							{e.q}
						</q>
						<Text fontSize="xl">{e.name}</Text>
						<Text fontSize="xl">{e.title}</Text>
					</Box>
				</GridItem>
			))}
		</Grid>
	);
};

export default RCard;
