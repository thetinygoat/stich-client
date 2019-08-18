import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
	background-color: rgb(7, 7, 7);
	color: #ffffff;
	height: 94.7vh;
	width: 15vw;
	display: flex;
	flex-direction: column;
	text-align: left;
	position: fixed;
	padding: 1em;
`;

const Link = styled.a`
	display: block;
	padding: 0.5em 0;
	font-weight: bold;
	color: rgb(156, 159, 159);
	cursor: pointer;
	font-size: 0.9em;
`;

const Logo = styled.h1`
	margin-bottom: 0.5em;
`;

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Logo>Stich</Logo>
			<Link>Home</Link>
			<Link>Search</Link>
			<Link>Library</Link>
			<Link>Sachin</Link>
		</SidebarContainer>
	);
};

export default Sidebar;
