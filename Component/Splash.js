import React, { Component } from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default class Splash extends Component {
    constructor(props)
    {
        super(props);
        this.state={ timer : 0}
        setInterval(() =>{
            this.setState({ timer : this.state.timer + 1})
        },1000)
    }
    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tittle}> QR CODE SCANNER </Text>
                <Image source={require('../Logo/ic_launcher.png')}></Image>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'rgb(32,53,70)',
        flex:1 ,
        alignItems: "center",
        justifyContent: "center",
    },
    tittle:{
        fontWeight:'bold',
        fontSize: 18,
        color: 'white',
    }
})