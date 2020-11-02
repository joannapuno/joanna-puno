import React from 'react';
import classes from './WorkThumbnail.css';

const workThumbnail = (props) => {
    const thumbClasses = [props.Class, classes.WorkThumb];
    const importAll = file => {
        let images = {};
        file.keys().map((item, index) => { images[item.replace('./', '')] = file(item); });
        return images;
    }

    const images = importAll(require.context('../../assets/images/WorkThumbs/', false, /\.(png)$/));

    const showThumbImageHandler = () => {
        const imgSrc = props.Src + '.png';
        const thumbStyle = {
            'background': 'url(' + images[imgSrc] + ')',
            'backgroundSize': 'cover',
            'backgroundPosition': 'center'
        };
        let thumb = (
            <a href={props.Link} target={'_blank'} className={(thumbClasses.join(' '))} style={thumbStyle}>
                <div className={classes.ThumbTitle}>{props.ThumbTitle}</div>
                <div className={classes.ThumbOverlay}></div>
            </a>
        )

        if (props.ForDesign) {
            thumb = (
                <div target={'_blank'} className={(thumbClasses.join(' '))} style={thumbStyle}></div>
            );
        }

        return (
            thumb
        );
    }

    return (
        showThumbImageHandler()
    );
};

export default workThumbnail;