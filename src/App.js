import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Podcast, Search } from "./pages";
import { Player, Sidebar } from "./components";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	align-items: flex-start;
`;
function App() {
	return (
		<Container>
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route exact path="/podcasts/:id" component={Podcast} />
			</Switch>
			<Player />
		</Container>
	);
}

export default App;
