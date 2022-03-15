import React, {useState} from 'react';

import classes from './Select.module.scss'

const Select = ({label, values, value, onSelect}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleDropdown = () => {
        setIsVisible(state => (!state))
    }

    return (
        <div className={`${classes.select} ${isVisible ? classes.select__active : ''}`} onClick={handleDropdown}>
            <div className={classes.select__label}>{label}: <span>{value.label.toLowerCase()}</span></div>
            <div className={classes.select__dropdown}>
                <ul className={classes.list}>
                    {values.map((value, index) => (
                        <li className={classes.element} key={index} onClick={() => onSelect(value.sortBy)}>{value.label}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Select;