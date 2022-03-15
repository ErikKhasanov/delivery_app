import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {setFoods} from "../redux/actions/foods";
import {setCategories} from "../redux/actions/categories";
import {setSelectedCategory} from "../redux/actions/categories";
import {setCategoriesIsLoading} from "../redux/actions/categories";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header"
import Categories from "../components/Categories/Categories";
import Market from "../components/Market/Market";

const HomePage = () => {
    const [foodsToShow, setFoodsToShow] = useState(null)

    const dispatch = useDispatch();
    const {foods, selectedCategory} = useSelector(state => ({
        foods: state.foods.items,
        selectedCategory: state.categories.selectedCategory
    }));

    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(res => {
                dispatch(setFoods(res.foods))
            })
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            dispatch(setCategoriesIsLoading(true))
        }
    }, [selectedCategory])

    useEffect(() => {
        if (foods) {
            setFoodsToShow(foods)
        }
    }, [foods])

    const sortFoodsToShow = () => {
        if (selectedCategory.id === 0) {
            setFoodsToShow(foods)
            return
        }
        setFoodsToShow(foods.filter(good => good.category === selectedCategory.id))
    }

    useEffect(() => {
        if (!selectedCategory || !foods) return
        sortFoodsToShow()
    }, [selectedCategory, foods])

    return (
        <Layout>
            <Header/>
            <Categories/>
            {foodsToShow && (
                <Market
                    title={selectedCategory?.label || 'Все товары'}
                    foods={foodsToShow}
                />
            )}
        </Layout>
    )
}

export default HomePage