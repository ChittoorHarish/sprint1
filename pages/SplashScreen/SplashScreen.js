import * as React from 'react';
import styles from './styles';
import { Button, View, Text, SafeAreaView, ImageBackground, Image,StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
    setTimeout (() =>{
        navigation.replace('Onboarding');
   },2000
    );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{flex:1}}
      source={require('../assets/image/0_1Splash.png')}>

      </ImageBackground>
    
    </SafeAreaView>
  );
}

export default SplashScreen;