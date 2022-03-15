import React from 'react';

import classes from './CartItem.module.scss';

const CartItem = ({item}) => {
	const {img, name, price} = item;
	return (
		<div className={classes.cartItem}>
			<img className={classes.cartItem__img} src={img.url} alt={img.alt}/>
			<div className={classes.cartItem__title}>
				{name}
			</div>
			<div className={classes.cartItem__price}>
				{price} ₽
			</div>
			<div>
				x
			</div>
		</div>
	);
};

export default CartItem;