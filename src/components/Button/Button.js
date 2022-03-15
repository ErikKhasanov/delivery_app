import React from 'react';

import classes from './Button.module.scss'

const Button = ({children, className = '', onClick = () => {}}) => {
  return (
    <div className={[classes.button, className].join(' ')} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;