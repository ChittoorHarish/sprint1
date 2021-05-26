import * as React from 'react';
import { Button, View, Text, SafeAreaView, ImageBackground, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    setTimeout (() =>{
        navigation.replace('Onboarding');
   },3000
    );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{flex:1}}
      source={require('../Image/0_1Splash.png')}>

      </ImageBackground>
     
    </SafeAreaView>
  );
}

export default SplashScreen;