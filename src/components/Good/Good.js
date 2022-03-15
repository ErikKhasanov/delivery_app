import React from 'react';
import {useDispatch} from "react-redux";
import {setCart} from '../../redux/actions/cart';
import Button from "../Button/Button";

import classes from './Good.module.scss'

const Good = ({id, img, name, weight, description, price}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCart({id: id, price: price}))
    }

  return (
    <div className={classes.good} onClick={handleClick}>
      <div className={classes.good__thumbnail} style={{'backgroundImage': `url(${img.url})`}}/>
      <div className={classes.good__body}>
        <div className={classes.good__body__inner}>
          <div className={classes.good__title}>
            <span className={classes.name}>{name}</span>
            <span className={classes.weight}>{weight}</span>
          </div>
          <div className={classes.good__description}>
            {description}
          </div>
          <div className={classes.good__footer}>
        <span className={classes.price}>
          {price} ₽
        </span>
            <Button className={classes.button}>
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;