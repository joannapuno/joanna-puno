import React from 'react';
import classes from './Work.css';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import WorkThumbnail from '../WorkThumbnail/WorkThumbnail';

const work = (props) => (
    <div className={classes.Work}>

        {/* WORK -- CODE + DESIGN */}
        <div className={classes.WorkContainer}>
            <div className={classes.WorkHeader}>
                <CopyTitle>code + design work </CopyTitle>
            </div>

            <div className={classes.WorkGrid}>
                <WorkThumbnail Link={'https://joannapuno.github.io/fancy-todo/'} Class={classes.WorkThumb1} Src={'vue-todo'} ThumbTitle={'vue.js to-do'} />
                <WorkThumbnail Link={'https://joannapuno.github.io/QuoteMachine/'} Class={classes.WorkThumb2} Src={'quote-machine'} ThumbTitle={'quote slider'} />
                <WorkThumbnail Link={'https://joannapuno.github.io/joke-machine/'} Class={classes.WorkThumb3} Src={'joke-machine'} ThumbTitle={'i have a joke...'} />
                <WorkThumbnail Link={'https://joannapuno.github.io/Paperclip-stationery/'} Class={classes.WorkThumb4} Src={'paperclip-stationery'} ThumbTitle={'stationery web design'} />
            </div>
        </div>

        {/* WORK -- JUST DESIGN */}
        <div className={classes.WorkContainer}>
            <div className={classes.WorkHeader}>
                <CopyTitle>for the eyes </CopyTitle>
            </div>

            <div className={classes.WorkGrid}>
                <WorkThumbnail Class={classes.WorkThumb1} Src={'ciwa1'} ForDesign={true} />
                <WorkThumbnail Class={classes.WorkThumb2} Src={'typeface'} ForDesign={true}/>
                <WorkThumbnail Class={classes.WorkThumb3} Src={'identity-design'} ForDesign={true} />
                <WorkThumbnail Class={classes.WorkThumb4} Src={'magazine-page'} ForDesign={true} />
                <WorkThumbnail Class={classes.WorkThumb5} Src={'recipe'} ForDesign={true} />
            </div>
        </div>

    </div>
);

export default work;