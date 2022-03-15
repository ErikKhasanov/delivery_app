import React, {useState, memo, useCallback} from 'react';
import SelectDropDown from "./SelectDropDown";

import classes from './Select.module.scss'

const Select = memo(function Select({label, values, value, onSelect}) {
	const [isVisible, setIsVisible] = useState(false);

	const handleDropdown = useCallback(() => {
		setIsVisible(state => (!state))
	}, [setIsVisible])

	return (
		<div className={`${classes.select} ${isVisible ? classes.select__active : ''}`} onClick={handleDropdown}>
			<div className={classes.select__label}>{label}: <span>{value.label.toLowerCase()}</span></div>
			{isVisible && <SelectDropDown values={values} onSelect={onSelect} handleClickOutside={() => setIsVisible(false)}/>}
		</div>
	);
})

export default Select;