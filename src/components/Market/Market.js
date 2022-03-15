import React, {useMemo} from 'react';
import Good from "../Good/Good";

import {useSelector} from "react-redux";
import SkeletonCards from "../SkeletonCards";

import classes from './Market.module.scss'

const Market = () => {
	const {foods, selectedCategory, isLoading} = useSelector(state => ({
		foods: state.foods.items,
		selectedCategory: state.categories.selectedCategory,
		isLoading: state.foods.isLoading
	}));

	const renderGoods = useMemo(() => (
		foods.map(good => (
			<Good
				id={good.id}
				img={good.img}
				name={good.name}
				weight={good.weight}
				description={good.description}
				price={good.price}
				key={good.id}
			/>
	))), [foods])

	const renderSkeleton = useMemo(() => {
		const count = 10;
		const arr = [];
		for(let i = 0; i < count; i++){
			arr.push(<SkeletonCards />)
		}
		return arr
	}, [])

	if (!foods || !!selectedCategory) return null

	return (
		<div className={classes.market}>
			<div className={classes.market__title}>{selectedCategory.label}</div>
			<div className={classes.market__grid}>
				{isLoading ? renderSkeleton : renderGoods}
			</div>
		</div>
	);
};

export default Market;