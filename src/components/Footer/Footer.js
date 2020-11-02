import React from 'react';
import classes from './Footer.css';

const footer = (props) => {
    const currentYear = new Date().getFullYear();

    return(
        <div className={classes.Footer}>
            <div className={classes.CopyRight}>&#169; Joanna Puno {currentYear}</div>
            <div className={classes.FooterMessage}>Mabuhay!</div>
        </div>
    );
};

export default footer;