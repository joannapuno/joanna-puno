import React from 'react';
import classes from './Hero.css';
import { Element } from 'react-scroll';

import NavArrow from '../../components/UI/NavArrow/NavArrow';

const hero = (props) => {
    const arrowStyle = {
        'bottom': '40px'
    };

    return (
        <Element className={classes.Hero} id="/">
            
            {/* Hero Text */}
            <div className={classes.HeroText}>
                <div className={classes.MainHeroText}>
                    <div className={classes.Joanna}>joanna</div>
                    <div className={classes.Puno}>puno</div>
                </div>

                <div className={classes.HeroSubText}>
                    code + design
                </div>
            </div>

            {/* Yellow BG */}
            <div className={classes.HeroPolygon}>
                <div className={classes.Polygon}></div>
            </div>

            <NavArrow
                anchorPage='#about'
                label='about'
                style={arrowStyle} />

        </Element>

    );
};

export default hero;