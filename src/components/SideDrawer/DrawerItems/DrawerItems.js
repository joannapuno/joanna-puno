import React from 'react';
import DrawerItem from './DrawerItem/DrawerItem';
import classes from './DrawerItems.css';


const drawerItems = (props) => (
    <ul className={classes.DrawerItems}>
        <DrawerItem link ="/" exact>home</DrawerItem>
        <DrawerItem link ="/#about">about</DrawerItem>
        <DrawerItem link ="/#about-work">code + design</DrawerItem>
        <DrawerItem link ="/#work-code">front-end work</DrawerItem>
        <DrawerItem link ="/#work-design">design work</DrawerItem>
    </ul>
);


export default drawerItems;