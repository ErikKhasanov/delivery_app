const InitialState = {
	isLoading: false,
	items: [],
	itemsCount: 0,
	itemsPrice: 0
};

const categories = (state = InitialState, action)  => {
	if(action.type === 'SET_CART'){
		return{
			...state,
			items: [...state.items, action.payload],
			itemsCount: state.items.length + 1,
			itemsPrice: state.itemsPrice + action.payload.price
		}
	}
	return state
}

export default categories;