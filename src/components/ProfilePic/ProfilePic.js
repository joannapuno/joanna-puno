import React from 'react';
import imageSrc from '../../assets/images/profile.jpeg';
import classes from './ProfilePic.css';

const profilePic = (props) => {
    const imageBgClasses = [ classes.ImageBG, classes[props.pageClass] ]

    return (
        <div className={classes.ImageContainer}>
            <div className={classes.Image} style={{ 'width': props.width }}>
                <img width={'100%'} src={imageSrc} alt={'Joanna Puno'} />
            </div>
            <div className={ imageBgClasses.join(' ') } style={{ 'width': props.width, 'height': props.width }}></div>
        </div>
    );
};

export default profilePic;