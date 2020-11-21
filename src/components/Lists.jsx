import React from "react";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";

export default function Lists() {
	const lists = useSelector((state) => state.shoppingListReducer);

	if (lists) {
		return lists.map((list, index) => {
			return <ListCard key={index} list={list} />;
		});
	} else {
		return <div></div>;
	}
}
