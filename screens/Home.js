import { Montserrat_200ExtraLight } from '@expo-google-fonts/montserrat';
import React, { Component } from 'react'
import { Text, View, Button, ImageBackground, StyleSheet, Image } from 'react-native'
import homeImage from '../assets/homeImage.png'
import logo from '../assets/logo.png'
import hi from '../assets/hi.png'
import hey from '../assets/hey.png'

export default class Home extends Component {
    render() {
        return (
            <ImageBackground source={homeImage} style={styles.container}>
                <Text style={styles.Welcometxt}>Welcome to</Text>
                <View style={{transform: [{ rotate: '340deg'}]}}>
                    <Text style={styles.Chattxt1}>CHAT</Text>
                    <Text style={styles.Chattxt2}>CHAT</Text>
                </View>
                <Image source={logo} style={styles.logo}></Image>
                <Image source={hi} style={styles.hi}></Image>
                <Image source={hey} style={styles.hey}></Image>
                <Button title='Get Started' style={styles.btn}/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      height: null,
      width: null
    },
    Welcometxt:{
      color: 'white',
      fontSize: 40,
      textAlign: 'justify',
      fontWeight: '500',
      position: 'absolute',
      top: 50,
    },
    Chattxt1:{
        color: '#E3E6EE',
        fontSize: 60,
        textAlign: 'justify',
        fontWeight: '100',
        position: 'absolute',
        bottom: 40,
        left:-90
    },
    Chattxt2:{
        color: '#0C2F80',
        fontSize: 60,
        textAlign: 'justify',
        fontWeight: '100',
        position: 'absolute',
        bottom: -10,
        left:-4
    },
    logo:{
        width:200,
        height: 200
    },
    hi:{
        width: 75,
        height:75,
        position: 'absolute',
        left: 50,
        bottom: 255
    },
    hey:{
        width: 70,
        height:70,
        position: 'absolute',
        left: 280,
        bottom: 185
    },
    btn:{
        backgroundColor: 'white',
        color:'#0C2F80',
        width: 200,
        height: 60,
        borderRadius: 20
    }
});
  
