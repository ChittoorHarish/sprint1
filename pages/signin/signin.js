import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Button, View, Text, ActivityIndicator, SafeAreaView, Image, TextComponent, TouchableOpacity, StyleSheet, TextInput, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, setErrormsg] = useState(false);
  const [errormsgtext, setErrormsgtext] = useState('');


  const [data, setData] = React.useState({
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }



  sendcred = () => {

    console.log(email, password)
    fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({
        "email": email,
        "password": password

      })

    })
      .then(res => res.json())
      .then((responseJson) => {
        //Success

        console.log(responseJson.data);

        if (responseJson.code == 200) 
        {
          console.log("1. auth_token:" + responseJson.data.token);
          console.log("1. auth_userid:" + responseJson.data.id);
          console.log("2. auth_postid:" + responseJson.data.id);

          AsyncStorage.setItem('auth_token',responseJson.data.token);
          AsyncStorage.setItem('auth_userid',responseJson.data.id);
          AsyncStorage.setItem('auth_postid',responseJson.data.id);

          props.navigation.navigate('Home');
          //let token = await AsyncStorage.getItem('auth_token')
        }
        else {
          setErrormsgtext(responseJson.message)
     setErrormsg(true);
      return;
          
          // alert(
          //   "InValid Credential, Unable to Login ",

          //   [
          //     {
          //       text: "Cancel",
          //       onPress: () => console.log("Cancel Pressed"),
          //       style: "cancel"
          //     },
          //     { text: "OK", onPress: () => console.log("OK Pressed") }
          //   ],

          // );
          
        }
      })
    //If response is not in json then in error

  }


  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ justifyContent: 'center', }}>
        <View style={styles.signintitle}>
          <Text style={styles.signintitletext}>Sign In</Text>
        </View>
        <View style={styles.basic}>
          <View style={styles.SectionStyle}>
            <View style={styles.basic}>
              <Icon name="mail-outline" size={30} />
            </View>
            <TextInput
              style={{ flex: 1, fontSize: moderateScale(17), marginLeft: wp('3%') }}
              placeholder="Ashley@mail.com"
              value={email}
              onChangeText={(text) => setEmail(text)}

            />
          </View>
          <View style={styles.SectionStyle1}>

            <View style={styles.basic}>
              <Icon name="lock-closed-outline" size={30} />
            </View>

            <TextInput
              style={{ flex: 1, fontSize: 18, marginLeft: wp('3%') }}
              placeholder={"Password"}
              secureTextEntry={true}
              value={password}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?
                <Text style={styles.show}>Show</Text> : <Text style={styles.hide}>Hide</Text>}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.basicpass}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('forgotpassword')}>
            <Text style={styles.forgotpasstext}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {errormsg?
        <View style={styles.errortitle}>
          <Text style={styles.errortext}>{errormsgtext}</Text>
        </View>
        :null}
        <View style={styles.touchsend}>
          <TouchableOpacity style={styles.touchable}
            onPress={() => sendcred()}>
            <Text style={styles.signintextbot}>Sign In</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.touchsend2}>
          <Text style={styles.noacc}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('signup')}>
            <Text style={styles.signuptext}>Sign Up</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

export default signin;

