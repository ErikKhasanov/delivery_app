import React from 'react';
import {useSelector} from "react-redux";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import CartGrid from "../components/Cart/CartGrid";

const Cart = () => {
	const {cart, foods} = useSelector(state => ({
		cart: state.cart.items,
		foods: state.foods.items
	}));

	const preparedFoods = cart.map(item => foods.find(foods => foods.id === item.id))

	return (
		<Layout>
			<Header/>
			<CartGrid foods={preparedFoods}/>
		</Layout>
	);
};

export default Cart;