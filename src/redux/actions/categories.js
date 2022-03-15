import {fetchFoods} from "./foods";


export const setCategories = (items) => ({
	type: 'SET_CATEGORIES',
	payload: items
});

export const setSelectedCategory = (item) => (dispatch) => {
	dispatch(fetchFoods(item))
	return ({
		type: 'SET_SELECTED_CATEGORY',
		payload: item
	})
};

export const setCategoriesIsLoading = (value) => ({
	type: 'SET_CATEGORIES_IS_LOADING',
	payload: value
});