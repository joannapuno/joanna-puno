import React from 'react';
import classes from './AboutWork.css';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import CopyBody from '../../components/UI/CopyBody/CopyBody';
import CoreAssetsGraphic from '../../components/CoreAssetGraphic/CoreAssetGraphic';

const aboutWork = (props) => (
    <div className={classes.AboutWork}>
        <div className={classes.AssetsContainer}>
            <CoreAssetsGraphic className={classes.AssetsGraphic} />
        </div>
        <div className={classes.AboutWorkText}>
            <CopyTitle>code + design</CopyTitle>
            <CopyBody> My core assets as a developer + designer. There are more to learn, but these are the ones I focus on when it comes to improving my skillsets.
                </CopyBody>
        </div>

    </div>
);

export default aboutWork;