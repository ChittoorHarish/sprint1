import React, {useState} from "react";
import { View, StyleSheet, Text, SafeAreaView,Image ,Button,TouchableOpacity} from "react-native";
import styles from './styles';
import OptionsMenu from "react-native-option-menu";
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect } from "react";
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView,} from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';

const homeongoing = (props) => {
  const [discard, discardPost] = useState();
  const [edit, editPost] = useState();
  const [data, setData] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const currentPost = props.route.params.post;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    const myIcon = (<Icon name="ellipsis-vertical-outline" color="grey" size={25} />)

    useEffect(async () => {
      console.log("currentPost",currentPost);
      let token = await AsyncStorage.getItem('auth_token');
      let userid = await AsyncStorage.getItem('auth_userid');
   //  setAuthtoken(a.id)
     fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/get?user_id=" + userid,
     {
       method: 'GET',
      headers: {
        "Authorization": 'Bearer ' + token
      }
       
     })
     .then(res=>res.json())
     .then(results=>{
      //  console.log("resp:" + JSON.stringify(results))
       setData(results)
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
{/* <OptionsMenu
  customButton={myIcon}
  destructiveIndex={1}
  options={["Edit", "Discard", "Cancel"]}
  actions={[editPost, discardPost]}/> */}
  
      <Icon name="ellipsis-vertical-outline" color="grey" size={25}  onPress={toggleModal}/>

      <Modal isVisible={isModalVisible}
      onRequestClose={() => { this.setState({modalVisible: false})
    }}
      style={{justifyContent:'flex-start',alignItems:'flex-end',marginRight:wp('16%'),marginTop:hp('18%')}}>
        <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',width:wp('35%'),height:hp('12%'),backgroundColor:'white',borderRadius:10}}>
         
          <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('3%'),marginTop:('10%'),marginEnd:wp('2%')}}>
            <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
          <Icon name="pencil-outline" color="black" size={20}/>
          </View>
          <TouchableOpacity onPress={() =>{toggleModal(); props.navigation.navigate('editongoing',{currentPost})}}>
          <Text style={{color:'grey',fontFamily:'Poppins-SemiBold',marginLeft:wp('2%')}}>Edit</Text>
          </TouchableOpacity>
          </View>
          
          <View
style={{
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
  width:wp("25%"),
  marginLeft:wp('2%'),
  marginEnd:wp('4%'),
  marginTop:hp('1%')
}}
/>
<View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('3%'),marginTop:('10%'),marginEnd:wp('2%')}}>
            <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
          <Icon name="trash-bin-outline" color="black" size={20}/>
          </View>
          <TouchableOpacity onPress={() =>{toggleModal()}}>
          <Text style={{color:'grey',fontFamily:'Poppins-SemiBold',marginLeft:wp('2%')}}>Discard</Text>
          </TouchableOpacity>
          </View>
         
        </View>
      </Modal>
    
</View>
    </View>
    <View style={styles.bodyview}>
              <View style={styles.info}>
                <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column',width:wp('30%')}}>
                 
                  <Text style={styles.chaptertitle}>{currentPost.title}</Text>
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
                <Text style={styles.description}>{currentPost.description}</Text>
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
                <Text style={styles.datetext}>06-22-2021</Text>
                <View style={styles.calicon}>
<Icon name="calendar-outline" color="black" size={20}/>
</View>
            </View>
            <View style={styles.dateview}>
                <Text style={styles.needtext}>Communication Preferred:</Text>
                <Text style={styles.datetext}>Chat</Text>
                <View style={styles.calicon}>
<Icon name="chatbox-ellipses-outline" color="black" size={20}/>
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
                <Text style={styles.applicanttext}>Applicants</Text>

            </View>
            <View style={styles.detailview}>
            <View style={styles.detail}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/gal.png')}></Image>
</View>
<View style={styles.touch}>
    <TouchableOpacity onPress={() => props.navigation.navigate('homeongoing1')}>
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
<TouchableOpacity onPress={() => props.navigation.navigate('applicantprofile')}>
<View style={styles.procontainer}>
          
          <Text style={styles.points}>View Profile</Text>
          
        </View>
        </TouchableOpacity>



    </View>

                

            </View>
            <View style={styles.detailview}>
            <View style={styles.detail}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/gal.png')}></Image>
</View>
<View style={styles.touch}>
    <TouchableOpacity onPress={() => props.navigation.navigate('homeongoing1')}>
  <Text style={styles.applicantname}>Imily_02</Text>
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
<TouchableOpacity onPress={() => props.navigation.navigate('applicantprofile')}>
<View style={styles.procontainer}>
          
          <Text style={styles.points}>View Profile</Text>
          
        </View>
        </TouchableOpacity>



    </View>

                

            </View>
    </View>
    </ScrollView>
    </SafeAreaView>

    
  );
};

// const styles = StyleSheet.create({
 
// });

export default homeongoing;