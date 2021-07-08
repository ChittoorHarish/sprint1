import React, {useState, useEffect} from "react";
import { View, StyleSheet,} from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, SafeAreaView,Image,TextComponent,TouchableOpacity, TextInput,} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const postprofile = (props) => {
  const [authtoken, setAuthtoken] = useState([]);
  const [note, setNote] = useState([]);

  useEffect(async () => {
    let token = await AsyncStorage.getItem('auth_token');
    let userid = await AsyncStorage.getItem('auth_userid');
    //  setAuthtoken(a.id)
    fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/rating/get?user_id=20&type=1",
      {
        method: 'GET',
        headers: {
          "Authorization": 'Bearer ' + token
        }

      })
      .then(res => res.json())
      .then((json) => {
        console.log("resp:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + JSON.stringify(json))
        setNote(json.data)
      })
  }, [])

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      < ScrollView>
      
      <View style={styles.frame}>
      <View style={styles.ellipsis}>
        <Icon name="ellipsis-vertical-outline" color="grey" size={25}/>
        </View>
      <View style={styles.header}>
      <View style={styles.center}>
      <Image style={styles.profilepic}
        source={require('../assets/image/galgadot.jpeg')}>

        </Image>
      </View>
      
        
        </View>
        <View style={styles.nameview}>
            <Text style={styles.mainname}>Inaya_04</Text>

        </View>
        <View style={styles.nameview}>
            <Text style={styles.teacher}>College Student</Text>

        </View>
        <View style={styles.toppoints}>
        <View style={styles.procontainer}>
          <View style={styles.basic}>
          <Text style={styles.points}>300</Text>
          </View>
          <View style={styles.flameicon}>
          <Icon name="flame-outline"  size={20} color={'gold'}/>
          </View>
          
          
        </View>
        <View style={styles.procontainerbook}>
        {/* <View style={styles.staricon}>
          <Icon name="star-outline"  size={12} color={'grey'}/>
          </View> */}
          <View style={styles.flameicon}>
          <Icon name="bookmark-outline"  size={22} color={'grey'}/>
          </View>
          
          
        </View>
        </View>
        <View
style={{
  borderBottomColor: 'rgb(189,189,189)',
  borderBottomWidth: 2,
  width:wp("92%"),
  marginTop:hp('2%'),
  marginBottom:hp('2%')
}}
/>
<View style={styles.content}>
    <Text style={styles.maintext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of lorm.</Text>
    <Text style={styles.phototext}>Photo Added</Text>
</View>
      </View>
      <View style={styles.picsection}>
         <View style={styles.imagesection}>
         <Image style={styles.addpic}
        source={require('../assets/image/car.jpg')}>

        </Image>
        <Image style={styles.addpic1}
        source={require('../assets/image/car.jpg')}>

        </Image>
        <Image style={styles.addpic1}
        source={require('../assets/image/car.jpg')}>

        </Image>

         </View>
         <View style={styles.ratingbox}>
    <Text style={styles.ratingtext}>Ratings and Reviews</Text>
</View>     
      </View>
      {/* <View style={styles.ratingbox1}>
          <View style={styles.tutorstar}>
              <Text style={styles.tutortext}>Tutor Ranking</Text>
              <View style={styles.ratingicon1}>
          <Icon name="star"  size={22} color={'rgb(255,213,0)'}/>
          </View>
          <View style={styles.ratingicon}>
          <Icon name="star"  size={22} color={'rgb(255,213,0)'}/>
          </View>
          <View style={styles.ratingicon}>
          <Icon name="star"  size={22} color={'rgb(255,213,0)'}/>
          </View>
          <View style={styles.ratingicon}>
          <Icon name="star"  size={22} color={'rgb(255,213,0)'}/>
          </View>
          <View style={styles.ratingicon}>
          <Icon name="star"  size={22} color={'rgb(189,189,189)'}/>
          </View>
          <Text style={styles.starrate}>4/5</Text>
          </View>
      </View> */}

      {note.map((item,index)=>{
            return(
              <View style={styles.tutordetail} key={index}>
              <View style={styles.headertitle}>
            <View style={styles.basic}>
            <Image style={styles.onpostpic}
        source={require('../assets/image/gal.png')}></Image>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>{item.name}</Text>
          <Text style={styles.occupation}>{item.created_at}</Text>
        </View>
        <View style={styles.ratingstar}>
        <Text style={styles.starrate}>{item.rating}/5</Text>
        </View>
        <View style={styles.ratingicon}>
                  <Icon name="star"  size={22} color={'yellow'}/>
                  </View>
            </View>
            <View style={styles.tutordesc}>
            <Text style={styles.tutormaintext}>{item.review} </Text>
            <Text style={styles.readmore}>Read More... </Text>
        </View>
        <View
        style={{
          borderBottomColor: 'rgb(189,189,189)',
          borderBottomWidth: 2,
          width:wp("92%"),
          marginLeft:wp('2%'),
          marginTop:hp('2%'),
          marginBottom:hp('1%')
        }}
        />
              </View> 
            );
            })}
      {/* <View style={styles.tutordetail}>
      <View style={styles.headertitle}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/galgadot.jpeg')}></Image>
</View>
<View style={styles.titlebox}>
  <Text style={styles.nametitle}>Inaya_04</Text>
  <Text style={styles.occupation}>25-04-2020</Text>
</View>
<View style={styles.ratingstar}>
<Text style={styles.starrate}>4.8/5</Text>
</View>
<View style={styles.ratingicon}>
          <Icon name="star"  size={22} color={'rgb(80,80,80)'}/>
          </View>
    </View>
    <View style={styles.tutordesc}>
    <Text style={styles.tutormaintext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
    <Text style={styles.readmore}>Read More... </Text>
</View>
<View
style={{
  borderBottomColor: 'rgb(189,189,189)',
  borderBottomWidth: 2,
  width:wp("92%"),
  marginLeft:wp('2%'),
  marginTop:hp('2%'),
  marginBottom:hp('1%')
}}
/>
      </View> */}
      {/* <View style={styles.tutordetail1}>
      <View style={styles.headertitle}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/galgadot.jpeg')}></Image>
</View>
<View style={styles.titlebox}>
  <Text style={styles.nametitle}>Gal_gadot</Text>
  <Text style={styles.occupation}>25-04-2020</Text>
</View>
<View style={styles.ratingstar}>
<Text style={styles.starrate}>4.8/5</Text>
</View>
<View style={styles.ratingicon}>
          <Icon name="star"  size={22} color={'rgb(80,80,80)'}/>
          </View>
    </View>
    <View style={styles.tutordesc}>
    <Text style={styles.tutormaintext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
    <Text style={styles.readmore}>Read More... </Text>
</View>
<View
style={{
  borderBottomColor: 'rgb(189,189,189)',
  borderBottomWidth: 2,
  width:wp("92%"),
  marginLeft:wp('2%'),
  marginTop:hp('2%'),
  marginBottom:hp('1%')
}}
/>
      </View> */}
      
     
     
      
      
    </ScrollView>
    {/* <View style={styles.bottombutton}>
    <View style={styles.button}>
            <TouchableOpacity style={styles.touchdecline}>
              <Text style={styles.declinetext}>Decline</Text>

            </TouchableOpacity>
          </View>
          <View style={styles.button}>
          <TouchableOpacity style={styles.touchaccept}>
              <Text style={styles.accepttext}>Accept</Text>

            </TouchableOpacity>
          </View>
          </View> */}
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
  
// });

export default postprofile;