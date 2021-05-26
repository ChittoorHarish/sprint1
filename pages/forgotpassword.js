import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, View, Text, SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../services/responsiveFunc';

const forgotpassword = (props) => {
  const [email,setEmail] = useState('');

  sendcred = () => {
    if (!email.trim()) {
      alert('Please Enter Email to Proceed');
      return;
    }
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
    .then(data=>{
      console.log(data)
    })
    props.navigation.navigate('newpassword')
   
  }

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
      <View style={{justifyContent:'center',}}>
      <View style={{justifyContent:'center',alignItems:'flex-start',marginTop:hp('21%')}}>
        <Text style={{fontSize:moderateScale(22),marginLeft:wp('5%'),fontWeight:'bold',}}>Forgot Password</Text>

      </View>
      <View style={{justifyContent:'center',alignItems:'flex-start',marginTop:hp('2%')}}>
          <Text style={{marginLeft:wp('5%'),marginEnd:wp('7%'),color:'grey',fontSize:moderateScale(17)}}>
              Please enter the email address ypu used to create your account and we'll send yoou a link to reset your password.
          </Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('2.5%')}}>
      <View style={styles.SectionStyle}>
 
      <View style={{justifyContent:'center',alignItems:'center'}}>
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
        
        <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('24%'),alignSelf:'center'}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'blue',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'}}
             onPress={() => sendcred()}>
              <Text style={{fontSize:moderateScale(18),color:'white',fontWeight:'bold'}}>Submit</Text>

            </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
  );
}

export default forgotpassword;

const styles = StyleSheet.create({
 
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    marginTop:hp('2%'),
    borderColor: 'transparent',
    borderBottomColor:'black',
    height: hp('6%'),
    margin:11,
    marginEnd:wp('4%'),
    marginLeft:wp('5%'),
},
});