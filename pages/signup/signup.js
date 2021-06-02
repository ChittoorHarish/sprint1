import  React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import { Button, View,Text, ScrollView,SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet,TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';


const signup= (props) => {

  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone_no,setPhone_no] = useState('');
  const [country_code,setCountry_code] = useState('');
  const [dob,setDob] = useState('');
  const [password,setPassword] = useState('');
  const [confirm_password,setConfirm_password] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [errormsg, setErrormsg] = useState(false);
  const [errormsgtext, setErrormsgtext] = useState('');
  const [data, setData] = React.useState({
    secureTextEntry: true,
});
const [data1, setData1] = React.useState({
  secureTextEntry2: true,
});

  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
  }
  const updateSecureTextEntry2 = () => {
    setData1({
        ...data1,
        secureTextEntry2: !data1.secureTextEntry2
    });
  }

  const [estado, setEstado] = useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  //console.log(estado);

  sendcred = () => {
    if (!firstname.trim()) {
      setErrormsgtext('Please Enter First Name')
      setErrormsg(true);
      return;
      
    }
    if (!lastname.trim()) {
      setErrormsgtext('Please Enter Last Name')
      setErrormsg(true);
      return;
    }
    if (!username.trim()) {
      setErrormsgtext('Please Enter UserName')
      setErrormsg(true);
      return;
    }
    if (!email.trim()) {
      setErrormsgtext('Please Enter Valid Email!')
      setErrormsg(true);
      return;
    }
    if (!phone_no.trim()) {
      setErrormsgtext('Please Enter Phone')
      setErrormsg(true);
      return;
    }
    // if (!country_code.trim()) {
    //   setErrormsgtext('Please Enter Valid Email!')
    //   setErrormsg(true);
    //   return;
    // }
    // if (!dob.trim()) {
    //   setErrormsgtext('Please Enter Valid Email!')
    //   setErrormsg(true);
    //   return;
    // }
    if (!password.trim()) {
      setErrormsgtext('Please Enter Password')
      setErrormsg(true);
      return;
    }
    if (!confirm_password.trim()) {
      setErrormsgtext('Please Enter Confirm Password')
      setErrormsg(true);
      return;
    }

    console.log(firstname,lastname,username,email,phone_no,country_code,dob,password,confirm_password)
    fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/signup",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "firstname":firstname,
        "lastname":lastname,
        "username":username,
        "email":email,
        "phone_no":phone_no,
        "country_code":country_code,
        "dob":dob,
        "password":password,
        "confirm_password":confirm_password
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
            "Please Check the Fields to Proceed",
            
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
    
   
  }

  return (
    <SafeAreaView style={styles.safe}>
        <ScrollView>
      <View style={styles.basicstart}>
      <View style={styles.signuptext}>
        <Text style={styles.signuptitle}>Sign Up</Text>

      </View>
      <View style={styles.basicstart}>
      <View style={styles.SectionStyle}>
 
      <View style={styles.basic}>
      <Icon name="person-outline" size={30}/>
      </View>
 
          <TextInput
              style={styles.textin}
              placeholder="First Name"
              value={firstname}
              onChangeText={(text)=>setFirstname(text)}
          />
 
        </View>
        <View style={styles.SectionStyle}>
 
        <View style={styles.basic}>
      <Icon name="person-outline" size={30}/>
      </View>
 
          <TextInput
              style={styles.textin}
              placeholder="Last Name"
              value={lastname}
              onChangeText={(text)=>setLastname(text)}
          />
 
        </View>
        <View style={styles.SectionStyle}>
 
        <View style={styles.basic}>
      <Icon name="person-outline" size={30}/>
      </View>
 
          <TextInput
              style={styles.textin}
              placeholder="User Name"
              value={username}
              onChangeText={(text)=>setUsername(text)}
          />
 
        </View>
        <View style={styles.SectionStyle}>
 
        <View style={styles.basic}>
      <Icon name="mail-outline" size={30}/>
      </View>
 
          <TextInput
              style={styles.textin}
              placeholder="Email Address"
              value={email}
              onChangeText={(text)=>setEmail(text)}
          />
 
        </View>
 <View style={styles.SectionStyle}>
 
 <View style={styles.basic}>
<Icon name="call-outline" size={30}/>
</View>

   <TextInput
       style={styles.textin}
       placeholder="Phone"
       value={phone_no}
       onChangeText={(text)=>setPhone_no(text)}
   />

 </View>
 <View style={styles.SectionStyle}>
 
 <View style={styles.basic}>
      <Icon name="lock-closed-outline" size={30}/>
      </View>

   <TextInput
       style={styles.textin}
       placeholder="Password"
       secureTextEntry={false}  
       secureTextEntry={data.secureTextEntry ? true : false}
       value={password}
              onChangeText={(text)=>setPassword(text)}  
   />
    <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? 
           <Icon name="eye-off-outline" size={30}/> :  <Icon name="eye-outline" size={30}/>}
          </TouchableOpacity>
     
 </View>
 <View style={styles.SectionStyle}>

 <View style={styles.basic}>
      <Icon name="lock-closed-outline" size={30}/>
      </View>

   <TextInput
       style={styles.textin}
       placeholder="Confirm Password"
       secureTextEntry={false} 
       secureTextEntry={data1.secureTextEntry2 ? true : false}
       value={confirm_password}
              onChangeText={(text)=>setConfirm_password(text)}   
   />
   <TouchableOpacity onPress={updateSecureTextEntry2}>
            {data1.secureTextEntry2 ? 
           <Icon name="eye-off-outline" size={30}/> :  <Icon name="eye-outline" size={30}/>}
          </TouchableOpacity>
    
 </View>
 <View style={styles.basicbot}>
 <View style={styles.check}>
 <View style={styles.basiccheck}>
 <CheckBox
    disabled={false}
    value={toggleCheckBox}
    boxType={'square'}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
      </View>
   <Text style={styles.accept}>I accept the</Text>
   <TouchableOpacity 
   onPress={() => props.navigation.navigate('termsandconditions')}>
   <Text style={styles.terms}> Terms & Conditions</Text>
   </TouchableOpacity>
   <Text style={styles.and}> and</Text>

 </View>
 </View>
 <View style={{justifyContent:'center',marginLeft:wp('5%'),alignItems:'center'}}>
   <TouchableOpacity>
   <Text style={styles.privacy}>Privacy Policies</Text>
   </TouchableOpacity>

 </View>
 
 
        </View>
       
        
          </View>
          {errormsg?
        <View style={styles.errortitle}>
          <Text style={styles.errortext}>{errormsgtext}</Text>
        </View>
        :null}
          <View style={styles.send}>
            <TouchableOpacity style={styles.sendbtn}
            onPress={() => sendcred()}>
              <Text style={styles.signuptextbot}>Sign Up</Text>

            </TouchableOpacity>
          </View>
          <Text style={{color:'transparent',marginTop:hp('1%')}}>-</Text>
          </ScrollView>
    </SafeAreaView>
  );
}

export default signup;

// const styles = StyleSheet.create({

// });