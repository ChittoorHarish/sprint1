import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Button, View, Text, SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const forgotpassword = (props) => {
  const [email,setEmail] = useState('');
  const [errormsg, setErrormsg] = useState(false);
  const [errormsgtext, setErrormsgtext] = useState('');

  sendcred = () => {
    // if (!email.trim()) {
    //   setErrormsgtext('Please Enter Email')
    //   setErrormsg(true);
    //   return;
    // }
    console.log(email)
    fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/password/forgot",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":email

      })

    })
    .then(res=>res.json())
    .then((responseJson) => {
      //Success
      
      console.log(responseJson.code)

      if(responseJson.code==200  
  
        ){
          props.navigation.navigate('newpassword')
        }
        else{
          setErrormsgtext(responseJson.message)
          setErrormsg(true);
          return;
          // alert(
          //   "Please Enter Registered Email ",
            
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
   
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={{justifyContent:'center',}}>
      <View style={styles.forgotpassword}>
        <Text style={styles.forgotpass}>Forgot Password</Text>

      </View>
      <View style={styles.forgotpasstext}>
          <Text style={styles.instruction}>
              Please enter the email address you used to create your account and we'll send you a link to reset your password.
          </Text>
      </View>
      <View style={styles.textinp}>
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
        </View>
        {errormsg?
        <View style={styles.errortitle}>
          <Text style={styles.errortext}>{errormsgtext}</Text>
        </View>
        :null}
        
        <View style={styles.buttonsend}>
            <TouchableOpacity style={styles.touchpass}
             onPress={() => sendcred()}>
              <Text style={styles.submitbtn}>Submit</Text>

            </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
  );
}

export default forgotpassword;

// const styles = StyleSheet.create({
 
 
// });