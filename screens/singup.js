import React, { Component } from 'react'
import { Text, View, Button, ImageBackground, StyleSheet, Image } from 'react-native'
import homeImage from '../assets/homeImage.png'
import emaillogo from '../assets/emaillogo.png'
import passwordlogo from '../assets/passwordlogo.png'


export default class singup extends Component {
    render() {
        return (
            <ImageBackground source={homeImage} style={styles.container}>
                <Text style={styles.Logintxt}>Sing Up</Text>
                <View style={styles.emailtxtbox}>
                    <Image source={emaillogo} style={styles.emaillogo}></Image>
                </View>
                <View style={styles.passwordtxtbox}>
                    <Image source={passwordlogo} style={styles.passwordlogo}></Image>
                </View>
                <View style={styles.passwordContxtbox}>
                    <Image source={passwordlogo} style={styles.passwordlogo}></Image>
                </View>
                <Text style={styles.FYPassword}>Forget Your Password ?</Text>
                {/* <Button title='Login' style={styles.Loginbtn}></Button> */}
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
    Logintxt:{
        color:'white',
        fontSize: 40,
        position: 'absolute',
        top: 50
    },
    emailtxtbox:{
        backgroundColor: '#F5F5F5',
        width: 250,
        height:50,
        position: 'absolute',
        top: 190,
        borderRadius: 20
    },
    passwordtxtbox:{
        backgroundColor: '#F5F5F5',
        width: 250,
        height:50,
        position: 'absolute',
        top: 260,
        borderRadius: 20
    },
    passwordContxtbox:{
        width:30,
        height:30,
        position:'relative',
        left : 10,
        top: 40
    },
    emaillogo: {
        width:30,
        height:30,
        position:'relative',
        left : 10,
        top: 10
    },
    passwordlogo:{
        width:30,
        height:30,
        position:'relative',
        left : 10,
        top: 10
    },
    FYPassword:{
        fontSize: 15,
        color:'white',
        position: 'relative',
        top: 30
    },
    
});
  
