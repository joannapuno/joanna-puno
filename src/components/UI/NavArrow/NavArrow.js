import React from 'react';
import classes from './NavArrow.css';
import DownArrow from './DownArrow/DownArrow';


const navArrow = (props) => (
    <div className={classes.NavArrow} style={props.style}>
        <div className={classes.NavName}>{props.label}</div>
        <div className={classes.NavArrowIcon}>
            <DownArrow />
        </div>
    </div>
);

export default navArrow;