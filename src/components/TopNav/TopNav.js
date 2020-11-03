import React from 'react';
import classes from './TopNav.css';


import DrawerToggle from './DrawerToggle/DrawerToggle';

const topNav = (props) => {
    let topNavClasses = [classes.TopNav];
    if(props.ScrolledClass){
        topNavClasses.push(classes.Scrolled);
    }

    return (
        <div className={topNavClasses.join(' ')}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
        </div>
    );
};

export default topNav;