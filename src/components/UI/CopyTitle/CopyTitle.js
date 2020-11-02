import React from 'react';
import classes from './CopyTitle.css';

const copyTitle = (props) => (
    <h2 className={classes.CopyTitle}>
        {props.children}
    </h2>
);

export default copyTitle