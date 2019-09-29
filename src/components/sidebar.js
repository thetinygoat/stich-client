import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SidebarContainer = styled.div`
  background-color: rgb(7, 7, 7);
  color: #ffffff;
  width: 15vw;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: sticky;
  top: 0;
  bottom: 0;
  height: 89vh;
  padding: 2em;
`;

const StyledLink = styled.a`
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
			<Link to="/">
				<Logo>Stich</Logo>
			</Link>
			<StyledLink>
				<Link to="/">Home</Link>
			</StyledLink>
			<StyledLink>
				<Link to="/search">Search</Link>
			</StyledLink>
		</SidebarContainer>
	);
};

export default Sidebar;
