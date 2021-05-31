import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Button, View, Text,ActivityIndicator, SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const signin = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  

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

    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    //Check for the Email TextInput
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    }
    //Checked Successfully
    //Do whatever you want
   
    

    console.log(email,password)
    fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password

      })

    })
    .then(res=>res.json())
    .then((responseJson) => {
      //Success
      
      console.log(responseJson.code)

      if(responseJson.code==200  
  
        ){
          props.navigation.navigate('hamburger')
        }
        else{
          alert(
            "InValid Credential, Unable to Login ",
            
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            
          );
        }
    })
    //If response is not in json then in error
   
  }


  return (
    <SafeAreaView style={styles.safe}>
      <View style={{justifyContent:'center',}}>
      <View style={styles.signintitle}>
        <Text style={styles.signintitle}>Sign In</Text>

      </View>
      <View style={styles.basic}>
      <View style={styles.SectionStyle}>
        <View style={styles.basic}>
      <Icon name="mail-outline" size={30}/>
      </View>
          <TextInput
              style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
              placeholder="Ashley@mail.com"
              value={email}
              onChangeText={(text)=>setEmail(text)}
          />
 
        </View>
        <View style={styles.SectionStyle1}>
 
        <View style={styles.basic}>
      <Icon name="lock-closed-outline" size={30}/>
      </View>
 
          <TextInput
              style={{flex:1,fontSize:18,marginLeft:wp('3%')}}
              placeholder={"Password"}
              secureTextEntry={true}    
              value={password}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(text)=>setPassword(text)} 
          />
            <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? 
          <Text style={styles.show}>Show</Text> : <Text style={styles.hide}>Hide</Text>}
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.basic}>
          <TouchableOpacity
          onPress={() => props.navigation.navigate('forgotpassword')}>
          <Text style={styles.forgotpasstext}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={touchsend}>
            <TouchableOpacity style={styles.touchable}
             onPress={() => sendcred()}>
              <Text style={styles.signintext}>Sign In</Text>

            </TouchableOpacity>
          </View>
          <View style={touchsend2}>
            <Text style={styles.noacc}>Don't have an account?</Text>
            <TouchableOpacity
            onPress={() => props.navigation.navigate('signup')}>
            <Text style={styles.signuptext}>SignUp</Text>
            </TouchableOpacity>

          </View>
          </View>
    </SafeAreaView>
  );
}

export default signin;
