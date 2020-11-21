import React from "react";
import AddItem from "./AddItem";
import ShoppingList from "./ShoppingList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ShoppingListPage() {
	const { id } = useParams();

	const color = useSelector(
		(state) =>
			state.shoppingListReducer.find((list) => list.id === Number(id)).color
	);

	return (
		<div className="main-wrapper">
			<div
				className="shopping-list-wrapper"
				style={{ backgroundColor: `${color}` }}
			>
				<Link to="/">
					<i className="fas fa-arrow-left text-dark my-3"></i>
				</Link>
				<AddItem />
				<ShoppingList />
			</div>
		</div>
	);
}
