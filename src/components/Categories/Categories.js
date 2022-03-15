import React, {useCallback, useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setCategories, setSelectedCategory} from "../../redux/actions/categories";
import {setFilter} from "../../redux/actions/filters";

import Button from "../Button/Button";
import Select from "../Select/Select";

import {TYPES_OF_SORT} from "../../configs/categories";

import classes from './Categories.module.scss'

const Categories = () => {
	const dispatch = useDispatch();
	const {categories, selectedCategory, selectedSortBy} = useSelector(state => ({
		categories: state.categories.items,
		selectedCategory: state.categories.selectedCategory,
		selectedSortBy: state.filter.sortBy
	}))

	useEffect(() => {
		fetch('/categories.json')
			.then(res => res.json())
			.then(res => {
				dispatch(setCategories(res.categories))
				dispatch(setSelectedCategory(res.categories[0].id))
			})
	}, [])

	const selectCategory = useCallback((categoryId) => {
		dispatch(setSelectedCategory(categoryId))
	})

	const renderBtns = useMemo(() => {
		if(!!selectedCategory) return
		return categories.map((category) => (
			<Button
				className={`${classes.filter__btn} ${selectedCategory?.id === category.id ? classes.filter__btn__active : ''}`}
				onClick={() => selectCategory(category.id)} key={category.id}>{category.label}</Button>
		))
	}, [selectCategory, selectedCategory])

	const handleSelect = useCallback((sortBy) => {
		dispatch(setFilter(sortBy))
	}, [dispatch])

	const currentSortBy = useMemo(() => (
        TYPES_OF_SORT.find(el => el.sortBy === selectedSortBy)
    ), [TYPES_OF_SORT, selectedSortBy])

	return (
		<div className={classes.menu}>
			<div className={classes.filter}>
				{renderBtns}
			</div>
			<Select
				label={'Сортировка по'}
				onSelect={handleSelect}
				values={TYPES_OF_SORT}
				value={currentSortBy}
			/>
		</div>
	);
};

export default Categories