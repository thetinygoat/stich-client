import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Podcast } from "./pages";
import { Player, Sidebar } from "./components";
function App() {
	return (
		<Fragment>
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/podcasts/:id" component={Podcast} />
			</Switch>
			<Player />
		</Fragment>
	);
}

export default App;
