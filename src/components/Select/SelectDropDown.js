import React, {useRef} from 'react';
import useClickOutside from "../../hooks/useClickOutside";
import classes from "./Select.module.scss";


const SelectDropDown = ({values, handleClickOutside, onSelect}) => {
	const clickRef = useRef();
	useClickOutside(clickRef, handleClickOutside)

	return (
		<div ref={clickRef} className={classes.select__dropdown}>
			<ul className={classes.list}>
				{values.map((value, index) => (
					<li className={classes.element} key={index}
						onClick={() => onSelect(value.sortBy)}>{value.label}</li>
				))}
			</ul>
		</div>
	);
};

export default SelectDropDown;