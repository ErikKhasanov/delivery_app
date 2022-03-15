import React from 'react';

import classes from './layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={classes.pageLayout}>
            <div className={classes.pageLayout__inner}>
                {children}
            </div>
        </div>
    );
};

export default Layout;