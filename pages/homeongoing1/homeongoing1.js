import React, { useRef } from "react";
import {useState} from "react";
import { View, StyleSheet,Switch} from "react-native";
import styles from './styles';
import OptionsMenu from "react-native-option-menu";
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from "react-native-raw-bottom-sheet";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, SafeAreaView,Image,TextComponent,TouchableOpacity, TextInput,} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const homeongoing1 = (props) => {
    const [customStyleIndex, setCustomStyleIndex] = useState(0);
    const [toggle, setToggle] = useState(false);
    const refRBSheet = useRef();
    const [discard, discardPost] = useState();
    const [edit, editPost] = useState();
    const [estado, setEstado] = useState(false);
    const [data, setData] = useState({});
    const [authtoken,setAuthtoken] = useState([]);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };
    const myIcon = (<Icon name="ellipsis-vertical-outline" color="grey" size={25} />)
    const handleCustomIndexSelect = (index) => {
      setCustomStyleIndex(index);
    };
    useEffect(async () => {
      let token = await AsyncStorage.getItem('auth_token');
      let userid = await AsyncStorage.getItem('auth_userid');
      let postid = await AsyncStorage.getItem('auth_postid');
   //  setAuthtoken(a.id)
     fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/applicant?post_id=" + postid,
     {
       method: 'GET',
      headers: {
        "Authorization": 'Bearer ' + token
      }
       
     })
     .then(res=>res.json())
     .then(results=>{
       console.log("resp:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + JSON.stringify(results))
       setData(results.data)
     })
   },[]) 
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <ScrollView>
      <View style={styles.basic1}>
      <View style={styles.headertitle}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/galgadot.jpeg')}></Image>
</View>
<View style={styles.titlebox}>
  <Text style={styles.nametitle}>Inaya_04</Text>
  <Text style={styles.occupation}>College Student</Text>
</View>
<View style={styles.ellipsis}>
<OptionsMenu
  customButton={myIcon}
  destructiveIndex={1}
  options={["Edit", "Discard", "Cancel"]}
  actions={[editPost, discardPost]}/>
</View>
    </View>
    <View style={styles.bodyview}>
              <View style={styles.info}>
                <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column',width:wp('30%')}}>
                 
                  <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                  <Text style={styles.chaptername}>Algebra</Text>
                  
                </View>
                <View style={styles.procontainer1}>
          <View style={styles.basic}>
          <Text style={styles.pointsbot}>300</Text>
          </View>
          <View style={styles.flameicon}>
          <Icon name="flame-outline" color="yellow" size={18}/>
          </View>
          
          
        </View>
              </View>
              <View style={styles.captionview}>
                <Text style={styles.description}>{data ? data.description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of lorm."}</Text>
              </View>
              <View style={styles.imageview}>
              <View style={styles.insideview}>
            <Image style={styles.insidepic}
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('4%'),}}>
            <Image style={styles.insidepic}
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        </View>
            </View>
            <View style={styles.dateview}>
                <Text style={styles.needtext}>Needed By:</Text>
                <Text style={styles.datetext}>march-22-2021</Text>
                <View style={styles.calicon}>
<Icon name="calendar-outline" color="black" size={20}/>
</View>
            </View>
            <View
style={{
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
  width:wp("90%"),
  marginLeft:wp('4%'),
  marginTop:hp('1%')
}}
/>
<View style={styles.applicantview}>
                <Text style={styles.applicanttext}>Selected Tutor</Text>

            </View>
            <View style={styles.detailview}>
            <View style={styles.detail}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/gal.png')}></Image>
</View>
<View style={styles.touch}>
    <TouchableOpacity onPress={() => agregarFavoritos()}>
  <Text style={styles.applicantname}>Gal_Gadot</Text>
  <Text style={styles.about}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
  </TouchableOpacity>
  <Text style={styles.readmore}>Read more...</Text>
</View>
    </View>
    <View style={styles.pointview}>
        <Text style={styles.offered}>Offered Points:</Text>
        <Text style={styles.number}>300</Text>
        <View style={styles.flameicon}>
<Icon name="flame-outline" color="gold" size={16}/>
</View>
{estado ?
<TouchableOpacity>
<View style={styles.procontainer}>   
          <Text style={styles.points}>View Profile</Text>         
        </View>
        </TouchableOpacity>  : <View style={styles.procontainerchange}>   
          <Text style={styles.points}>View Profile</Text>         
        </View>}

    </View>
    <View
style={{
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
  width:wp("82%"),
  marginLeft:wp('4%'),
  marginTop:hp('2%')
}}
/>
{estado ?
<View style={styles.chatbutton}>
            <TouchableOpacity style={styles.chattouch}
            onPress={() => props.navigation.navigate('callschedule')}>
              <Text style={styles.chattext}>Go to chat</Text>

            </TouchableOpacity>
          </View> : <View style={styles.chatbutton}>
         
            <View style={styles.chattouchinact}>
              <Text style={styles.chattext}>Go to chat</Text>

            </View>
            
          </View> }
          <View style={styles.chatbutton}>
          {estado ?
            <TouchableOpacity style={styles.vidaudtouch}
            onPress={() => refRBSheet.current.open()}>
              <Text style={styles.vidaudtext}>Request - Video/Audio call</Text>

            </TouchableOpacity> : <Text style={styles.vidaudtextinact}>Request - Video/Audio call</Text>}
            <RBSheet
        ref={refRBSheet}
        animationType="slide"
        // closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0.5, 0.25, 0, 0.2)"
          },
          container:{
              borderRadius:30,
              width:wp('92%'),
              height:hp('48%'),
              marginLeft:wp('4%'),
              marginEnd:wp('4%')
          },              
          draggableIcon: {
          
            
          }
        }}
      >
       <View style={styles.rawbottom}>
           <Text style={styles.choose}>Choose Call Type</Text>
           <TouchableOpacity onPress={() => refRBSheet.current.close()}>
           <Text style={styles.done}>Done</Text>
           </TouchableOpacity>
       </View>
       <View
style={{
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
  width:wp("13%"),
  marginLeft:wp('39%'),
  marginTop:hp('1%')
}}
/>
<View style={styles.rawtext}>
    <Text style={styles.change}>Want to change preferred communication</Text>
<Text style={styles.change}>channel to Video call / Audio call</Text>
</View>
<View style={styles.channel}>
    <View style={styles.vidaud}>
      <TouchableOpacity>
    <View style={styles.vid}>
          <Icon name="videocam" color="white" size={40}/>
    </View>
    </TouchableOpacity>
    <Text style={styles.guide}>Video</Text>
    </View>
    <View style={styles.vidaud}>
    <TouchableOpacity>
    <View style={styles.aud}>
          <Icon name="mic" color="white" size={40}/>
    </View>
    </TouchableOpacity>
    <Text style={styles.guide}>Audio</Text>
    </View>
</View>
<View
style={{
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
  width:wp("82%"),
  marginLeft:wp('4%'),
  marginTop:hp('2%')
}}
/>
<View style={styles.switch}>
    <View style={styles.switchtext}>
        <Text style={styles.remember}>Remember my choice</Text>
        <Text style={styles.bottext}>This can be changed in profile settings</Text>
    </View>
    <View style={styles.switchbutton}>
    <Switch
        trackColor={{false: 'gray', true: 'blue'}}
        thumbColor="white"
        ios_backgroundColor="gray"
        onValueChange={(value) => setToggle(value)}
        value={toggle}
      />
    </View>

</View>

      </RBSheet>
          </View>

                

            </View>
           
    </View>
    </ScrollView>
    {estado ?
    <View style={styles.center}>
    <View style={styles.button}>
            <TouchableOpacity style={styles.marktouch}>
              <Text style={styles.marktext}>Mark as Complete</Text>

            </TouchableOpacity>
          </View>
          </View> : <View style={styles.center}>
    <View style={styles.button}>
            <View style={styles.marktouchinact}>
              <Text style={styles.marktextinact}>Mark as Complete</Text>
              </View>
            
          </View>
          </View>}
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
  
// });

export default homeongoing1;