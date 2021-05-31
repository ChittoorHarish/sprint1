import  React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Button, View,Text, ScrollView,SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';
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
      alert('Please Enter FirstName to Proceed');
      return;
    }
    if (!lastname.trim()) {
      alert('Please Enter LastName to Proceed');
      return;
    }
    if (!username.trim()) {
      alert('Please Enter UserName to Proceed');
      return;
    }
    if (!email.trim()) {
      alert('Please Enter Email to Proceed');
      return;
    }
    if (!phone_no.trim()) {
      alert('Please Enter Phone Number to Proceed');
      return;
    }
    if (!country_code.trim()) {
      alert('Please Enter Country Code to Proceed');
      return;
    }
    if (!dob.trim()) {
      alert('Please Enter Bate of Birth to Proceed');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password to Proceed');
      return;
    }
    if (!confirm_password.trim()) {
      alert('Please Re-Enter Password to Proceed');
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
    <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
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
        <View style={styles.country}>
        <View style={styles.SectionStyle1}>
           
        <View style={styles.basic}>
      <Icon name="globe-outline" size={30}/>
      </View>

   <TextInput
       style={styles.textin}
       placeholder="Country"
       value={country_code}
              onChangeText={(text)=>setCountry_code(text)}
   />
   </View>
   <View style={styles.SectionStyle1}>
           
   <View style={styles.basic}>
      <Icon name="calendar-outline" size={30}/>
      </View>

   <TextInput
       style={styles.textin}
       placeholder="DOB"
       value={dob}
              onChangeText={(text)=>setDob(text)}
   />
   

 </View>
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
 <View style={styles.basic}>
 <View style={styles.check}>
 <View style={styles.basic}>
   <TouchableOpacity onPress={() => agregarFavoritos()}>
     {estado ?
      <Icon name="checkbox-outline" color="blue" size={28}/> : <View style={{borderWidth:2,borderColor:'black',marginLeft:wp('0.5%'),marginTop:hp('0.2%'),height:hp('2.9%'),width:wp('5.5%')}}></View>}
      </TouchableOpacity>
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
          <View style={styles.send}>
            <TouchableOpacity style={styles.sendbt}
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

const styles = StyleSheet.create({

});