import React from 'react';
import classes from './NavArrow.css';
import DownArrow from './DownArrow/DownArrow';
import { Link } from 'react-scroll';


const navArrow = (props) => {
    const arrowClasses = [classes.NavArrowIcon, classes[ props.arrowDirection ]];
    const navArrowClasses = [classes.NavArrow, classes.Bounce]

    return (
        <Link className={navArrowClasses.join(' ')} style={props.style} to={props.anchorPage} smooth={true} duration={500}>
            <div className={classes.NavName}>{props.label}</div>
            <div className={ arrowClasses.join(' ') }>
                <DownArrow />
            </div>
        </Link>
    );
};

export default navArrow;