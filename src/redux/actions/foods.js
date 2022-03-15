import {
	getFoods,
	getSoupFoods,
	getSnacksFoods,
	getHotFoods,
	getSaladsFoods,
	getBakeryFoods,
	getPopularFoods
} from "../../api";

const gettersMap = [
	getFoods,
	getPopularFoods,
	getSnacksFoods,
	getSaladsFoods,
	getSoupFoods,
	getHotFoods,
	getBakeryFoods
]

export const fetchFoods = (category) => (dispatch) => {
	dispatch(setIsLoading(true))
	gettersMap[category]().then(res => dispatch(setFoods(res.foods))).finally(() => dispatch(setIsLoading(false)))
}

export const setFoods = (items) => ({
	type: 'SET_FOODS',
	payload: items
});

export const setIsLoading = (bool) => ({
	type: 'SET_IS_LOADING',
	payload: bool
});