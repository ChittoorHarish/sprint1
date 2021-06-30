import React, {useRef} from 'react';
import {useState} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import styles from './styles';
import OptionsMenu from 'react-native-option-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  Text,
  SafeAreaView,
  Image,
  TextComponent,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  moderateScale,
} from '../../services/responsiveFunc';

const apply = (props) => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const refRBSheet = useRef();
  const [discard, discardPost] = useState();
  const [edit, editPost] = useState();
  const [data, setData] = useState({});
  const [authtoken, setAuthtoken] = useState([]);

  const myIcon = (
    <Icon name="ellipsis-vertical-outline" color="grey" size={25} />
  );
  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };
  //     useEffect(async () => {
  //       let token = await AsyncStorage.getItem('auth_token');
  //       let userid = await AsyncStorage.getItem('auth_userid');
  //       let postid = await AsyncStorage.getItem('auth_postid');
  //    //  setAuthtoken(a.id)
  //      fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/applicant?post_id=" + postid,
  //      {
  //        method: 'GET',
  //       headers: {
  //         "Authorization": 'Bearer ' + token
  //       }

  //      })
  //      .then(res=>res.json())
  //      .then(results=>{
  //        console.log("resp:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + JSON.stringify(results))
  //        setData(results.data)
  //      })
  //    },[])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={styles.basic1}>
          <View style={styles.headertitle}>
            <View style={styles.basic}>
              <Image
                style={styles.onpostpic}
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
                options={['Edit', 'Discard', 'Cancel']}
                actions={[editPost, discardPost]}
              />
            </View>
          </View>
          <View style={styles.bodyview}>
            <View style={styles.info}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  width: wp('30%'),
                }}>
                <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                <View style={styles.dateview1}>
                  <Text style={styles.needtext1}>Needed By:</Text>
                  <Text style={styles.datetext1}>march-22-2021</Text>
                </View>
              </View>
              <View style={styles.procontainer1}>
                <View style={styles.basic}>
                  <Text style={styles.pointsbot}>300</Text>
                </View>
                <View style={styles.flameicon}>
                  <Icon name="flame-outline" color="orange" size={18} />
                </View>
              </View>
            </View>
            <View style={styles.captionview}>
              <Text style={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of lorm."
              </Text>
            </View>
            <View style={styles.imageview}>
              <View style={styles.insideview}>
                <Image
                  style={styles.insidepic}
                  source={require('../assets/image/car.jpg')}></Image>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: wp('4%'),
                }}>
                <Image
                  style={styles.insidepic}
                  source={require('../assets/image/car.jpg')}></Image>
              </View>
            </View>
          </View>
          <View style={styles.dateview}>
            <Text style={styles.needtext}>Needed By:</Text>
            <Text style={styles.datetext}>march-22-2021</Text>
            <View style={styles.calicon}>
              <Icon name="calendar-outline" color="black" size={20} />
            </View>
          </View>
          <View style={styles.dateview}>
            <Text style={styles.needtext}>Communication Preferred:</Text>
            <Text style={styles.datetext}>Chat</Text>
            <View style={styles.calicon}>
              <Icon name="chatbox-ellipses-outline" color="black" size={20} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.center}>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.marktouch}
            onPress={() => refRBSheet.current.open()}>
            <Text style={styles.marktext}>Apply</Text>
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            animationType="slide"
            // closeOnDragDown={true}
            closeOnPressMask={true}
            closeOnPressBack={true}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
              },
              container: {
                borderRadius: 30,
                width: wp('92%'),
                height: hp('58%'),
                marginLeft: wp('4%'),
                marginEnd: wp('4%'),
              },
              draggableIcon: {},
            }}>
            <View style={styles.rawbottom}>
              <Text style={styles.choose}>Apply</Text>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Text style={styles.done}>Back</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                width: wp('13%'),
                marginLeft: wp('39%'),
                marginTop: hp('1%'),
              }}
            />
            <View style={styles.rawtext}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.amount}>Reward Amount</Text>
                <Text style={styles.offer}>Your Offer</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.rewardoffer}>
                  <Text style={styles.rewardpoints}>300</Text>
                  <View style={styles.flameicon2}>
                    <Icon name="flame-outline" color="orange" size={18} />
                  </View>
                </View>
                <View style={styles.SectionStyle1}>
                  <TextInput style={styles.textin} placeholder="400" />
                  <View style={styles.basic}>
                    <Icon name="flame-outline" color="orange" size={18} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.transaction}>
              <Text style={styles.percent}>FIYA Transaction Fee (20%)</Text>
              <Text style={styles.digit}>80</Text>
              <View style={styles.tflame}>
                <Icon name="flame-outline" color="orange" size={18} />
              </View>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalr}>Total Reward Amount</Text>
              <Text style={styles.digitr}>320</Text>
              <View style={styles.tflame}>
                <Icon name="flame-outline" color="orange" size={18} />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                width: wp('82%'),
                marginLeft: wp('4%'),
                marginTop: hp('2%'),
              }}
            />
            <View style={styles.transaction}>
              <Text style={styles.percent}>Write a message</Text>
            </View>
            <View style={styles.transaction}>
              <TextInput
                style={styles.message}
                placeholder="Type here..."
                multiline={true}></TextInput>
            </View>
            <View style={styles.submitbutton}>
              <TouchableOpacity style={styles.submittouch}
              onPress={()=>{refRBSheet.current.close(),props.navigation.navigate('addpost')}}>
                <Text style={styles.marktext}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: 'transparent',
                borderBottomWidth: 1,
                width: wp('82%'),
                marginLeft: wp('4%'),
                marginTop: hp('1%'),
              }}
            />
          </RBSheet>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({

// });

export default apply;
