/**
 * @format
 */

import  React,{ Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './Component/Splash';


class Main extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            currentScreen: "Splash"
        };
        setTimeout(() =>{
            console.log("DOne some task after 3 seconds")
            this.setState({
                currentScreen: "App"
            })
        },3000)
    }
    
    render() {
        const {currentScreen} = this.state
        let mainScreen= currentScreen === "Splash" ? <Splash/> : <App/>
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () =>Main);
