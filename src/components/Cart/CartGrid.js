import React from 'react';
import CartItem from "./CartItem";

import classes from './CartGrid.module.scss'

const CartGrid = ({foods}) => {
	return (
		<div className={classes.grid}>
			{foods.map((item, index) => (
				<CartItem item={item} key={item.id + index}/>
			))}
		</div>
	);
};

export default CartGrid;