import React from 'react';
import profilePic from '../../assets/images/profile.jpeg';
import classes from './ProfilePic.css';

const picture = (props) => (
    <div className={classes.ImageContainer}>
        <div className={classes.Image} style={ { 'width': props.width } }>
            <img width={'100%'} src={profilePic} alt={'Joanna Puno'}/>
        </div>
        <div className={classes.ImageBG} style={ { 'width': props.width, 'height': props.width } }></div>
    </div>
);

export default picture;