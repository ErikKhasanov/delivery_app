import React from 'react';
import Layout from "../components/Layout/Layout";
import {useSelector} from "react-redux";
import Header from "../components/Header/Header";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
	const {cart, foods} = useSelector(state => ({
		cart: state.cart,
		foods: state.foods.items
	}));
	const renderItems = () => (
		cart.items.map(item => (
			<CartItem item={foods.find(foods => foods.id === item.id)}/>
		))
	)
	return (
		<Layout>
			<Header/>
			<div>
				{renderItems()}
			</div>
		</Layout>
	);
};

export default Cart;