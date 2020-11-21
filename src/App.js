import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ShoppingListPage from "./components/ShoppingListPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/lista/:id" component={ShoppingListPage} />
			</Switch>
		</Router>
	);
}

export default App;
