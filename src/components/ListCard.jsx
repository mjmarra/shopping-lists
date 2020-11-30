import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/actions";
import { format } from "date-fns";

export default function ListCard({ list }) {
	const itemsBoughtQty = list.items.filter((item) => item.bought).length;

	const dispatch = useDispatch();

	const removeList = (id) => {
		dispatch(actionCreators.removeList(id));
	};

	return (
		<div
			className="card-wrapper effect2"
			style={{ backgroundColor: `${list.color}` }}
		>
			<div className="d-flex justify-content-between">
				<Link to={`/list/${list.id}`} style={{ color: "#3b3636" }}>
					<h4>{list.name}</h4>
				</Link>
				<h4>
					{itemsBoughtQty}/{list.items.length}
				</h4>
			</div>
			<div className="d-flex justify-content-between mt-4">
				<small className="text-left">
					Created {format(list.createdAt, "dd/MM/yyyy")}
				</small>
				<i className="fas fa-trash" onClick={() => removeList(list.id)}></i>
			</div>
		</div>
	);
}
