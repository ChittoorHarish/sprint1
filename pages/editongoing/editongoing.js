import React ,{useState, useEffect} from "react";
import { TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import { View, StyleSheet, Text, Image,TouchableOpacity} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';
import styles from './styles';
import { SafeAreaView } from "react-native";

const editongoing = () => {
    const [description, setDescription] = useState('');
    const [media, setMedia] = useState('');
    const [datetime, setDatetime] = useState('');


    sendcred = () => {

    //     console.log(description, media, datetime)
    //     fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/edit", {
    //       method: "PUT",
    //       headers: {
    //         'Content-Type': 'application/json'
            
    //       },
    //       body: JSON.stringify({
    //         "description": description,
    //         "media": media,
    //         "datetime":datetime
    
    //       })
    
    //     })
    //       .then(res => res.json())
    //       .then((responseJson) => {
    //         //Success
    
    //         console.log(responseJson.data);
    
    //         if (responseJson.code == 200) 
    //         {
    //           console.log("1. auth_token:" + responseJson.data.token);
    //           console.log("1. auth_userid:" + responseJson.data.id);
    //           console.log("2. auth_postid:" + responseJson.data.id);
    
    //           AsyncStorage.setItem('auth_token',responseJson.data.token);
    //           AsyncStorage.setItem('auth_userid',responseJson.data.id);
    //           AsyncStorage.setItem('auth_postid',responseJson.data.id);
    
    //           props.navigation.navigate('Home');
    //           //let token = await AsyncStorage.getItem('auth_token')
    //         }
    //         else {
    //           setErrormsgtext(responseJson.message)
    //      setErrormsg(true);
    //       return;
              
    //           // alert(
    //           //   "InValid Credential, Unable to Login ",
    
    //           //   [
    //           //     {
    //           //       text: "Cancel",
    //           //       onPress: () => console.log("Cancel Pressed"),
    //           //       style: "cancel"
    //           //     },
    //           //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //           //   ],
    
    //           // );
              
    //         }
    //       })
    //     //If response is not in json then in error
    
       }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      < ScrollView>
    <View style={styles.center1}>
    <View style={{marginLeft:wp('4%'),marginEnd:wp('4%'),width:wp('92%')}}>
         <Text style={{fontFamily:'Poppins-SemiBold',fontSize:moderateScale(16),color:'rgb(80,80,80)',lineHeight:25,marginTop:hp('1.5%')}}>Add more Details</Text>
         <View style={{borderWidth:0.3,borderColor:'black',width:wp('89%'),marginLeft:wp('1%'),marginEnd:wp('1%'),backgroundColor:'rgb(245,245,245)',marginTop:hp('1.5%'),borderRadius:7}}>
             <TextInput style={{marginLeft:wp('2%'),marginEnd:wp('2%'),textAlign:'left',fontFamily:'Poppins-Regular',fontSize:moderateScale(13),color:'rgb(112,112,112)',padding:4}}
             placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of lorm"
             multiline={true}
             value={description}
             onChangeText={(text) => setDescription(text)}></TextInput>
         </View>
         <Text style={{fontFamily:'Poppins-SemiBold',fontSize:moderateScale(16),color:'rgb(80,80,80)',lineHeight:25,marginTop:hp('1.5%')}}>Add more Media</Text>

         <View style={styles.picsection}>
         <View style={styles.imagesection}>
         <Image style={styles.addpic}
        source={require('../assets/image/car.jpg')}>

        </Image>
        <Image style={styles.addpic1}
        source={require('../assets/image/car.jpg')}>

        </Image>
       <View style={styles.putimage}>
       <View style={styles.addicon}>
                          <TouchableOpacity>
                            <Icon
                              name="add"
                              size={60}
                              color="rgb(80,80,80)"
                            />
                          </TouchableOpacity>
                        </View>

       </View>

         </View>   
      </View>
      <Text style={{fontFamily:'Poppins-SemiBold',fontSize:moderateScale(16),color:'rgb(80,80,80)',lineHeight:25,marginTop:hp('1.5%')}}>Completion deadline</Text>

      <View style={styles.datebox}>
                      <View style={styles.date}>
                      <TextInput style={styles.datetext}
                        placeholder="20 Feb 2021"
                        value={datetime}></TextInput>
                        <View style={styles.calendar}>
                          <TouchableOpacity>
                            <Icon
                              name="calendar-outline"
                              size={21}
                              color="rgb(80,80,80)"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                     

                      <View style={styles.dateboxside}>
                          <TextInput style={styles.datetext}
                          placeholder="9:20"
                          value={datetime}>

                          </TextInput>

                        <View style={styles.calendar}>
                          <TouchableOpacity>
                            <Icon
                              name="time-outline"
                              size={21}
                              color="rgb(80,80,80)"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
     </View>

       
    </View>
    </ScrollView>
    <View style={styles.center1}>
    <View style={styles.button}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'#1ab2ff',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'}}
            onPress={()=>sendcred()}>
              <Text style={{fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'}}>Save Details</Text>

            </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
  
// });

export default editongoing;