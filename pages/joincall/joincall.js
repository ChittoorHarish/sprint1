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

const joincall = props => {
  const [toggle, setToggle] = useState(false);
  const refRBSheet = useRef();
  const [discard, discardPost] = useState();
  const [edit, editPost] = useState();
  const [estado, setEstado] = useState(false);
  const [data, setData] = useState({});

  const agregarFavoritos = () => {
    setEstado(!estado);
  };
  const myIcon = (
    <Icon name="ellipsis-vertical-outline" color="grey" size={25} />
  );
  //     useEffect(async () => {
  //       let token = await AsyncStorage.getItem('auth_token');
  //       let userid = await AsyncStorage.getItem('auth_userid');
  //    //  setAuthtoken(a.id)
  //      fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/applicant?post_id=" + userid,
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
              <View style={styles.infoview}>
                <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                <Text style={styles.chaptername}>Algebra</Text>
              </View>
              <View style={styles.procontainer1}>
                <View style={styles.basic}>
                  <Text style={styles.pointsbot}>300</Text>
                </View>
                <View style={styles.flameicon}>
                  <Icon name="flame-outline" color="yellow" size={18} />
                </View>
              </View>
            </View>
            <View style={styles.captionview}>
              <Text style={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of lorm.
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
              <Icon name="calendar-outline" color="black" size={25} />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              width: wp('90%'),
              marginLeft: wp('4%'),
              marginTop: hp('1%'),
            }}
          />
          <View style={styles.applicantview}>
            <Text style={styles.applicanttext}>Selected Tutor</Text>
          </View>
          <View style={styles.detailview}>
            <View style={styles.detail}>
              <View style={styles.basic}>
                <Image
                  style={styles.onpostpic}
                  source={require('../assets/image/gal.png')}></Image>
              </View>
              <View style={styles.touch}>
                <TouchableOpacity>
                  <Text style={styles.applicantname}>Gal_Gadot</Text>
                  <Text style={styles.about}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </TouchableOpacity>
                <Text style={styles.readmore}>Read more...</Text>
              </View>
            </View>
            <View style={styles.pointview}>
              <Text style={styles.offered}>Offered Points:</Text>
              <Text style={styles.number}>300</Text>
              <View style={styles.flameicon}>
                <Icon name="flame-outline" color="gold" size={16} />
              </View>

              <TouchableOpacity>
                <View style={styles.procontainer}>
                  <Text style={styles.points}>View Profile</Text>
                </View>
              </TouchableOpacity>
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

            <View style={styles.chatbutton}>
              <TouchableOpacity style={styles.chattouch}>
                <Text style={styles.chattext}>Go to Chat</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scheduledbutton}>
              <TouchableOpacity style={styles.scheduletouch}>
                <Text style={styles.scheduletext}>Join Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.center}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.marktouch}>
            <Text style={styles.marktext}>Mark as Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({

// });

export default joincall;
