import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DrawerItem.css';

const drawerItem = (props) => (
    <li className={classes.DrawerItem}>
        <NavLink to={props.link} exact={props.exact} activeClassName={classes.active} >
            {props.children}
        </NavLink>
    </li>
);


export default drawerItem;