import React from "react";
import AddList from "./AddList";
import Lists from "./Lists";

export default function Home() {
	return (
		<div className="main-wrapper">
			<div className="lists-wrapper">
				<h4 className="my-4 text-center">My shopping lists</h4>
				<AddList />
				<Lists />
			</div>
		</div>
	);
}
