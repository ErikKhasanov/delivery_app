const asyncFetch = async (callback) => (
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(callback)
		}, Math.random() * (3000 - 300) + 300)
	})
)

export const getFoods = () => (
	fetch('/foods.json').then(res => asyncFetch(res.json()))
)

export const getPopularFoods = () => (
	fetch('/popular.json').then(res => asyncFetch(res.json()))
)

export const getSnacksFoods = () => (
	fetch('/snacks.json').then(res => asyncFetch(res.json()))
)

export const getSaladsFoods = () => (
	fetch('/salads.json').then(res => asyncFetch(res.json()))
)

export const getSoupFoods = () => (
	fetch('/foods.json').then(res => asyncFetch(res.json()))
)

export const getHotFoods = () => (
	fetch('/hotdishes.json').then(res => asyncFetch(res.json()))
)

export const getBakeryFoods = () => (
	fetch('/bakery.json').then(res => asyncFetch(res.json()))
)