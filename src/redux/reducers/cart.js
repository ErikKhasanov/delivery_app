const InitialState = {
	isLoading: false,
	items: [],
	itemsCount: 0,
	itemsPrice: 0
}

const cart = (state = InitialState, action)  => {
	if(action.type === 'SET_CART'){
		const data = {
			...state,
			items: [...state.items, action.payload],
			itemsCount: state.items.length + 1,
			itemsPrice: state.itemsPrice + action.payload.price
		}
		return data
	}
	if(action.type === 'REMOVE_CART'){
		const data = {
			...state,
			items: [...state.items.filter(item => item.id !== action.payload.id)],
			itemsCount: state.items.length - 1,
			itemsPrice: state.itemsPrice - action.payload.price
		}
		return data
	}
	return state
}

export default cart;