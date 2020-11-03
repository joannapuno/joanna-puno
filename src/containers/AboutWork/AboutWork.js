import React from 'react';
import classes from './AboutWork.css';
import { Element } from 'react-scroll';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import CopyBody from '../../components/UI/CopyBody/CopyBody';
import CoreAssetsGraphic from '../../components/CoreAssetGraphic/CoreAssetGraphic';
import NavArrow from '../../components/UI/NavArrow/NavArrow';

const aboutWork = (props) => {
    const arrowStyle = {
        'bottom': '-50px'
    };

    return (
        <Element className={classes.AboutWork} id="#about-work">
            {/* Graphic */}
            <div className={classes.AssetsContainer}>
                <CoreAssetsGraphic className={classes.AssetsGraphic} />
            </div>

            {/* Text */}
            <div className={classes.AboutWorkText}>
                <CopyTitle>code + design</CopyTitle>
                <CopyBody> My core assets as a developer + designer. There are more to learn, but these are the ones I focus on when it comes to improving my skillsets.
                </CopyBody>
            </div>

            {/* Link */}
            <NavArrow
                anchorPage='#work-code'
                label='personal work'
                style={arrowStyle} />

        </Element>
    )
};

export default aboutWork;