import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainApp from './MainApp';
import App from './App';
import { PopupOne, PopupTwo, PopupThree, PopupFour } from './components/Popups'

class Nav extends React.Component{
    
    render(){
        return (
            <Router>
                <Scene key="root">
                <Scene key="mainApp" component={MainApp} title="Menu Screen - 4 Buttons" initial />
                <Scene key="popupone" component={PopupOne} title="Mission One" />
                <Scene key="popuptwo" component={PopupTwo} title="Mission Two" />
                <Scene key="popupthree" component={PopupThree} title="Mission Three" />
                <Scene key="popupfour" component={PopupFour} title="Mission Four" />
                </Scene>
            </Router>
        )
    }
}

export default Nav;