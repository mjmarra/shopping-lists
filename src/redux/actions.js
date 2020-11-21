export const actionCreators = {
	addItem: (value, listId) => {
		return {
			type: "ADD_ITEM",
			payload: { value: value, listId: listId },
		};
	},
	removeItem: (value, listId) => {
		return {
			type: "REMOVE_ITEM",
			payload: { value: value, listId: listId },
		};
	},
	checkAsBought: (value, listId) => {
		return {
			type: "CHECK_AS_BOUGHT",
			payload: { value: value, listId: listId },
		};
	},
	addList: (data) => {
		return {
			type: "ADD_LIST",
			payload: data,
		};
	},
	removeList: (data) => {
		return {
			type: "REMOVE_LIST",
			payload: data,
		};
	},
};
