import React from 'react';
import classes from './Work.css';
import { Element } from 'react-scroll';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import WorkThumbnail from '../WorkThumbnail/WorkThumbnail';

const work = (props) => {
    
    return (<div className={classes.Work}>

        {/* WORK -- CODE + DESIGN */}
        <Element className={classes.WorkContainer} id="#work-code">
            <div className={classes.WorkHeader}>
                <CopyTitle>code + design work </CopyTitle>
            </div>

            <div className={classes.WorkGrid}>
                <WorkThumbnail Link={'https://joannapuno.github.io/fancy-todo/'} Class={classes.WorkThumb1} Src={'vue-todo'} ThumbTitle={'vue.js to-do'} />
                <WorkThumbnail Link={'https://joannapuno.github.io/QuoteMachine/'} Class={classes.WorkThumb2} Src={'quote-machine'} ThumbTitle={'quote slider'} />
                <WorkThumbnail Link={'https://joannapuno.github.io/joke-machine/'} Class={classes.WorkThumb3} Src={'joke-machine'} ThumbTitle={'i have a joke...'} />
                <WorkThumbnail Link={'https://joannapuno.github.io/Paperclip-stationery/'} Class={classes.WorkThumb4} Src={'paperclip-stationery'} ThumbTitle={'stationery web design'} />
            </div>
        </Element>

        {/* WORK -- JUST DESIGN */}
        <Element className={classes.WorkContainer} id="#work-design">
            <div className={classes.WorkHeader}>
                <CopyTitle>for the eyes </CopyTitle>
            </div>

            <div className={classes.WorkGrid}>
                <WorkThumbnail Class={classes.WorkThumb1} Src={'ciwa1'} ForDesign={true} />
                <WorkThumbnail Class={classes.WorkThumb2} Src={'typeface'} ForDesign={true} />
                <WorkThumbnail Class={classes.WorkThumb3} Src={'identity-design'} ForDesign={true} />
                <WorkThumbnail Class={classes.WorkThumb4} Src={'magazine-page'} ForDesign={true} />
                <WorkThumbnail Class={classes.WorkThumb5} Src={'recipe'} ForDesign={true} />
            </div>
        </Element>
    </div>
    );
};

export default work;