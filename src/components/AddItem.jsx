import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/actions";
import { useParams } from "react-router-dom";
import iconPlus from "../icons/icon-plus.svg";

export default function AddItem() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	const handleInputChange = (e) => {
		return setInput(e.target.value);
	};

	const handleClick = () => {
		if (input !== "") {
			dispatch(actionCreators.addItem(input, id));
			setInput("");
		}
	};

	return (
		<div className="form-group custom-input-wrapper mb-5">
			<span className="add-remove-item">
				<img src={iconPlus} onClick={handleClick} alt="Add" />
			</span>
			<input
				value={input}
				onChange={handleInputChange}
				type="text"
				className="form-control bg-transparent border-0"
				placeholder="Add item..."
				autoComplete="off"
			/>
		</div>
	);
}
