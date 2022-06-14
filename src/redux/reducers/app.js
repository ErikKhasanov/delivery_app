const InitialState = {
	isLoading: true
}

const initApp = (state = InitialState, action) => {
	return {
		...state,
		isLoading: false
	}
}

export default initApp