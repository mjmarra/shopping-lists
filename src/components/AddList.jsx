import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/actions";
import iconPlus from "../icons/icon-plus.svg";

export default function AddList() {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	const handleInputChange = (e) => {
		return setInput(e.target.value);
	};

	const handleClick = () => {
		if (input !== "") {
			dispatch(actionCreators.addList(input));
			setInput("");
		}
	};

	return (
		<div className="form-group custom-input-wrapper-addlist mb-5">
			<span className="add-remove-item">
				<img src={iconPlus} onClick={handleClick} alt="Agregar" />
			</span>
			<input
				value={input}
				onChange={handleInputChange}
				type="text"
				className="form-control bg-transparent border-0"
				placeholder="Agregar lista..."
				autoComplete="off"
			/>
		</div>
	);
}
