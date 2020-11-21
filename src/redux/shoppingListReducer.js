import randomColor from "randomcolor";

const initialState = [];

const addItem = (array, action) => {
	return array.map((list) => {
		if (list.id !== Number(action.payload.listId)) {
			return list;
		}
		return {
			...list,
			items: [{ value: action.payload.value, bought: false }, ...list.items],
		};
	});
};

const removeItem = (array, action) => {
	return array.map((list) => {
		if (list.id !== Number(action.payload.listId)) {
			return list;
		}
		return {
			...list,
			items: list.items.filter(
				(item, index) => index !== Number(action.payload.value)
			),
		};
	});
};

const updateItem = (array, action) => {
	return array.map((item, index) => {
		if (index !== Number(action.payload.value)) {
			return item;
		}
		return {
			...item,
			bought: true,
		};
	});
};

const checkAsBought = (array, action) => {
	return array.map((list) => {
		if (list.id !== Number(action.payload.listId)) {
			return list;
		}
		return {
			...list,
			items: updateItem(list.items, action),
		};
	});
};

const removeList = (array, action) => {
	return array.filter((list) => list.id !== action.payload);
};

// REDUCER
export default function shoppingListReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_ITEM":
			return addItem(state, action);

		case "REMOVE_ITEM":
			return removeItem(state, action);

		case "CHECK_AS_BOUGHT":
			return checkAsBought(state, action);

		case "ADD_LIST":
			return [
				...state,
				{
					id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
					name: action.payload,
					color: randomColor({
						luminosity: "light",
					}),
					items: [],
					createdAt: Date.now(),
				},
			];

		case "REMOVE_LIST":
			return removeList(state, action);

		default:
			return state;
	}
}
