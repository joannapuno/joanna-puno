import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';

import TopNav from '../../components/TopNav/TopNav';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    };
    

    render() {
        return (
            <Aux>
                <TopNav drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    };
};

export default Layout;