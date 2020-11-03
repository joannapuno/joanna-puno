import React from 'react';
import DrawerItem from './DrawerItem/DrawerItem';
import classes from './DrawerItems.css';


const drawerItems = (props) => (
    <ul className={classes.DrawerItems}>
        <DrawerItem link ="/" clicked={props.clicked}>home</DrawerItem>
        <DrawerItem link ="#about" clicked={props.clicked}>about</DrawerItem>
        <DrawerItem link ="#about-work" clicked={props.clicked}>code + design</DrawerItem>
        <DrawerItem link ="#work-code" clicked={props.clicked}>front-end work</DrawerItem>
        <DrawerItem link ="#work-design" clicked={props.clicked}>design work</DrawerItem>
        <DrawerItem link ="#contact" clicked={props.clicked}>contact</DrawerItem>
    </ul>
);


export default drawerItems;