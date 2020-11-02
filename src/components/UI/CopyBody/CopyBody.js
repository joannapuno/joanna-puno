import React from 'react';
import classes from './CopyBody.css';

const copyBody = (props) => (
    <p className={classes.CopyBody}>
        {props.children}
    </p>
);

export default copyBody