

export const setCategories = (items) => ({
	type: 'SET_CATEGORIES',
	payload: items
});

export const setSelectedCategory = (item) => {
	return ({
		type: 'SET_SELECTED_CATEGORY',
		payload: item
	})
};

export const setCategoriesIsLoading = (value) => ({
	type: 'SET_CATEGORIES_IS_LOADING',
	payload: value
});