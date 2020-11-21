import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, FormCheck } from "react-bootstrap";
import { actionCreators } from "../redux/actions";
import { useParams } from "react-router-dom";
import iconMinus from "../icons/icon-minus.svg";
import iconChecked from "../icons/checked-icon.svg";

export default function ShoppingList() {
	const dispatch = useDispatch();
	const { id } = useParams();

	const items = useSelector(
		(state) =>
			state.shoppingListReducer.find((list) => list.id === Number(id)).items
	);

	const checkAsBought = (index) => {
		dispatch(actionCreators.checkAsBought(index, id));
	};

	const removeItem = (index) => {
		dispatch(actionCreators.removeItem(index, id));
	};

	return (
		<ListGroup>
			{items.map((item, index) => {
				return !item.bought ? (
					<ListGroup.Item key={index} variant="light" className="text-left">
						<span
							className="check-item"
							onClick={() => checkAsBought(index, id)}
						>
							<FormCheck />
						</span>
						<span className="ml-3">{item.value}</span>
						<span className="remove-item">
							<img
								src={iconMinus}
								onClick={() => removeItem(index, id)}
								alt="Agregar"
							/>
						</span>
					</ListGroup.Item>
				) : (
					<ListGroup.Item key={index} variant="secondary" className="text-left">
						<span className="check-item">
							<img src={iconChecked} alt="Agregar" />
						</span>
						<strike className="ml-3">{item.value}</strike>
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
}
