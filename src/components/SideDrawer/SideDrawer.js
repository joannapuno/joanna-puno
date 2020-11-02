import React from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux/Aux';

import DrawerItems from './DrawerItems/DrawerItems';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    
    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed} />

            <div className={attachedClasses.join(' ')}>
                <nav>
                    <DrawerItems />
                </nav>
            </div>
        </Aux>
    );
};


export default sideDrawer;