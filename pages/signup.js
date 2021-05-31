import  React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, View,Text, ScrollView,SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../services/responsiveFunc';


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
      <View style={{justifyContent:'center',alignItems:'flex-start'}}>
      <View style={{justifyContent:'center',alignItems:'flex-start',marginTop:hp('4%')}}>
        <Text style={{fontSize:moderateScale(22),marginLeft:wp('5%'),fontFamily:'Poppins-Bold',}}>Sign Up</Text>

      </View>
      <View style={{justifyContent:'center',alignItems:'flex-start'}}>
      <View style={styles.SectionStyle}>
 
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="person-outline" size={30}/>
      </View>
 
          <TextInput
              style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
              placeholder="First Name"
              value={firstname}
              onChangeText={(text)=>setFirstname(text)}
          />
 
        </View>
        <View style={styles.SectionStyle}>
 
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="person-outline" size={30}/>
      </View>
 
          <TextInput
              style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
              placeholder="Last Name"
              value={lastname}
              onChangeText={(text)=>setLastname(text)}
          />
 
        </View>
        <View style={styles.SectionStyle}>
 
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="person-outline" size={30}/>
      </View>
 
          <TextInput
              style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
              placeholder="User Name"
              value={username}
              onChangeText={(text)=>setUsername(text)}
          />
 
        </View>
        <View style={styles.SectionStyle}>
 
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="mail-outline" size={30}/>
      </View>
 
          <TextInput
              style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
              placeholder="Email Address"
              value={email}
              onChangeText={(text)=>setEmail(text)}
          />
 
        </View>
        <View style={{flexDirection:'row',marginLeft:wp('5%'),alignItems:'center',justifyContent:'center',marginEnd:wp('4%')}}>
        <View style={styles.SectionStyle1}>
           
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="globe-outline" size={30}/>
      </View>

   <TextInput
       style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
       placeholder="Country"
       value={country_code}
              onChangeText={(text)=>setCountry_code(text)}
   />
   </View>
   <View style={styles.SectionStyle1}>
           
   <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="calendar-outline" size={30}/>
      </View>

   <TextInput
       style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
       placeholder="DOB"
       value={dob}
              onChangeText={(text)=>setDob(text)}
   />
   

 </View>
 </View>
 <View style={styles.SectionStyle}>
 
 <View style={{justifyContent:'center',alignItems:'center'}}>
<Icon name="call-outline" size={30}/>
</View>

   <TextInput
       style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
       placeholder="Phone"
       value={phone_no}
       onChangeText={(text)=>setPhone_no(text)}
   />

 </View>
 <View style={styles.SectionStyle}>
 
 <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="lock-closed-outline" size={30}/>
      </View>

   <TextInput
       style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')}}
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

 <View style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="lock-closed-outline" size={30}/>
      </View>

   <TextInput
       style={{flex:1,fontSize:moderateScale(17),marginLeft:wp('3%'),}}
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
 <View style={{justifyContent:'center',alignItems:'center'}}>
 <View style={{justifyContent:'center',marginLeft:wp('5%'),alignItems:'center',flexDirection:'row',marginEnd:wp('4%')}}>
 <View style={{justifyContent:'center',alignItems:'center',}}>
   <TouchableOpacity onPress={() => agregarFavoritos()}>
     {estado ?
      <Icon name="checkbox-outline" color="blue" size={28}/> : <View style={{borderWidth:2,borderColor:'black',marginLeft:wp('0.5%'),marginTop:hp('0.2%'),height:hp('2.9%'),width:wp('5.5%')}}></View>}
      </TouchableOpacity>
      </View>
   <Text style={{fontSize:moderateScale(17),marginLeft:wp('3%'),fontFamily:'Poppins-Regular'}}>I accept the</Text>
   <TouchableOpacity 
   onPress={() => props.navigation.navigate('termsandconditions')}>
   <Text style={{fontSize:moderateScale(17),color:'#1e90ff',fontFamily:'Poppins-Regular'}}> Terms & Conditions</Text>
   </TouchableOpacity>
   <Text style={{fontSize:moderateScale(17),fontFamily:'Poppins-Regular'}}> and</Text>

 </View>
 </View>
 <View style={{justifyContent:'center',marginLeft:wp('5%'),alignItems:'center'}}>
   <TouchableOpacity>
   <Text style={{fontSize:moderateScale(17),color:'#1e90ff',marginLeft:wp('10%'),fontFamily:'Poppins-Regular'}}>Privacy Policies</Text>
   </TouchableOpacity>

 </View>
 
        </View>
       
        
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('9%'),alignSelf:'center',marginBottom:hp('1%')}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'#1e90ff',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'}}
            onPress={() => sendcred()}>
              <Text style={{fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'}}>Sign Up</Text>

            </TouchableOpacity>
          </View>
          <Text style={{color:'transparent',marginTop:hp('1%')}}>-</Text>
          </ScrollView>
    </SafeAreaView>
  );
}

export default signup;

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
    width:wp('43%'),
    marginHorizontal:wp('2%'),
    marginTop:hp('2%'),
    borderColor: 'transparent',
    borderBottomColor:'black',
    height: hp('6%'),


  },

});