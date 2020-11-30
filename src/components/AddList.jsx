import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/actions";
import iconPlus from "../icons/icon-plus.svg";

export default function AddList() {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	const handleClick = () => {
		if (input !== "") {
			dispatch(actionCreators.addList(input));
			setInput("");
		}
	};

	return (
		<div className="form-group addlist-wrapper mb-5">
			<span className="add-remove-item">
				<img src={iconPlus} onClick={handleClick} alt="Add" />
			</span>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type="text"
				className="form-control bg-transparent border-0"
				placeholder="Add list..."
				autoComplete="off"
			/>
		</div>
	);
}
