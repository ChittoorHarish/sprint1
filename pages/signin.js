import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, View, Text, SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../services/responsiveFunc';

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
    <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
      <View style={{justifyContent:'center',}}>
      <View style={{justifyContent:'center',alignItems:'flex-start',marginTop:hp('21%')}}>
        <Text style={{fontSize:moderateScale(22),marginLeft:wp('5%'),fontWeight:'bold',}}>Sign In</Text>

      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
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
        <View style={styles.SectionStyle1}>
 
        <View style={{justifyContent:'center',alignItems:'center'}}>
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
          <Text style={{fontSize:moderateScale(17),color:'blue',fontWeight:'bold'}}>Show</Text> : <Text style={{fontSize:moderateScale(17),color:'blue',fontWeight:'bold'}}>Hide</Text>}
          </TouchableOpacity>
        </View>
        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start'}}>
          <TouchableOpacity
          onPress={() => props.navigation.navigate('forgotpassword')}>
          <Text style={{fontSize:moderateScale(17),color:'blue',fontWeight:'bold',marginLeft:wp('5%')}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('10%'),alignSelf:'center'}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'blue',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'}}
             onPress={() => sendcred()}>
              <Text style={{fontSize:moderateScale(18),color:'white',fontWeight:'bold'}}>Sign In</Text>

            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:hp('12%')}}>
            <Text style={{fontSize:moderateScale(16),color:'black'}}>Don't have an account?</Text>
            <TouchableOpacity
            onPress={() => props.navigation.navigate('signup')}>
            <Text style={{fontSize:moderateScale(16),color:'blue',marginLeft:wp('1%'),fontWeight:'bold'}}>SignUp</Text>
            </TouchableOpacity>

          </View>
          </View>
    </SafeAreaView>
  );
}

export default signin;

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
SectionStyle1: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderWidth: 2,
  marginTop:hp('3%'),
  borderColor: 'transparent',
  borderBottomColor:'black',
  height: hp('6%'),
  margin:11,
  marginEnd:wp('4%'),
  marginLeft:wp('5%'),
},

});