import {fetchFoods} from "./foods";
const DEFAULT_CATEGORY_ID = 0

export const initApp = () => (dispatch) => {
	dispatch(fetchFoods(DEFAULT_CATEGORY_ID))
	return {type: 'INIT_APP'}
}