import React, {useEffect, useState} from 'react';
import Good from "../Good/Good";

import classes from './Market.module.scss'

const Market = ({title, foods}) => {

  const renderGoods = () => (
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
    ))
  )

  return (
    <div className={classes.market}>
      <div className={classes.market__title}>{title}</div>
      <div className={classes.market__grid}>
        {renderGoods()}
      </div>
    </div>
  );
};

export default Market;