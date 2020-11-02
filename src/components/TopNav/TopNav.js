import React from 'react';
import classes from './TopNav.css';

import DrawerToggle from './DrawerToggle/DrawerToggle';

const topNav = (props) => (
        <div className={classes.TopNav}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
        </div>
);

export default topNav;