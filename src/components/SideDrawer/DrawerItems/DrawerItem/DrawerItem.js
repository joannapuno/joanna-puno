import React from 'react';
import classes from './DrawerItem.css';
import { Link } from 'react-scroll';


const drawerItem = (props) => {
    return (
        <li className={classes.DrawerItem}>
            <Link
                to={props.link}
                spy={true}
                smooth={true}
                duration={500}
                className={classes.Link} >
                {props.children}

            </Link>
        </li>
    );
};


export default drawerItem;