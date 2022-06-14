import React from 'react';

import Image from "next/image";
import Cart from "./Cart";
import classes from './Header.module.scss';
import Logo from '/src/public/img/logo.png'


const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.container}>
				<div className={classes.header__logo}>
					<a href="/">
						<Image width="38" height="53" src={Logo} alt="Pizza logo"/>
					</a>
					<div className={classes.title}>
						<h1>React <span className={classes.green}>Delivery</span></h1>
						<p>самая вкусная еда во вселенной</p>
					</div>
				</div>
				<Cart/>
			</div>
		</div>
	);
};

export default Header;