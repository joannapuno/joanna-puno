import React from 'react';
import classes from './Hero.css';
import Aux from '../../hoc/Aux/Aux';

import NavArrow from '../../components/UI/NavArrow/NavArrow';

const hero = (props) => {
    const arrowStyle = {
        'bottom': '105px'
    };

    return (
        <Aux>
            <div className={classes.Hero}>
                <div className={classes.HeroText}>
                    <div className={classes.MainHeroText}>
                        <div className={classes.Joanna}>joanna</div>
                        <div className={classes.Puno}>puno</div>
                    </div>

                    <div className={classes.HeroSubText}>
                        code + design
                </div>
                </div>
                <div className={classes.HeroPolygon}>
                    <div className={classes.Polygon}></div>
                </div>
            </div>

            {/* COME BACK TO THIS */}
            {/* <NavArrow
                anchorPage={'#About'}
                label={'about'}
                style={arrowStyle} /> */}
        </Aux>
    );
};

export default hero;