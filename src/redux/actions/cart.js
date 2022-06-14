export const setCart = (items) => ({
	type: 'SET_CART',
	payload: items
});

export const removeCart = (item) => ({
	type: 'REMOVE_CART',
	payload: item
});