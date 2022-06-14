import React from 'react';
import {useDispatch} from "react-redux";
import {removeCart} from "../../redux/actions/cart";

import classes from './CartItem.module.scss';

const CartItem = ({item}) => {
	const {img, name, price} = item;
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removeCart(item))
	}

	return (
		<div className={classes.cartItem}>
			<img className={classes.cartItem__img} src={img.url} alt={img.alt}/>
			<div className={classes.cartItem__title}>
				{name}
			</div>
			<div className={classes.cartItem__price}>
				{price} ₽
			</div>
			<div className={classes.cartItem__remove} onClick={handleRemove}>
				Удалить
			</div>
		</div>
	);
};

export default CartItem;