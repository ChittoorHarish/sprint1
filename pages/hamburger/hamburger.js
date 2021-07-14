import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  moderateScale,
  heightPercentageToDP,
} from '../../services/responsiveFunc';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Item} from 'native-base';
import { ActivityIndicator } from 'react-native';

// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

const {width, height} = Dimensions.get('screen');

const hamburger = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [authtoken, setAuthtoken] = useState([]);
  const [data, setData] = useState({});
  const [posts, setPosts] = useState([]);

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);
  useEffect(async () => {
    let token = await AsyncStorage.getItem('auth_token');
    let userid = await AsyncStorage.getItem('auth_userid');
    //  setAuthtoken(a.id)
    fetch(
      'https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/profile?user_id=' +
        userid,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(res => res.json())
      .then(results => {
        console.log(
          'resp:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + JSON.stringify(results),
        );
        
        setData(results.data)
        
      });
    

    // get users posts
    fetch(
      'https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/get?id=' +
        userid,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(res => res.json())
      .then(results => {
        console.log(
          'resp:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + JSON.stringify(results),
        );
        setPosts(results.data || [])
      });
     
  }, []);
 

  return (
    <ScrollView>
      <View style={styles.center}>
        <View style={styles.ham}>
          <View style={styles.icon}>
            <View style={{flexDirection:'column',borderWidth:0.3,borderColor:'transparent',width:wp('10%'),}}>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Text style={{fontSize:moderateScale(23),fontWeight:'bold',color:'#fff',marginTop:hp('-1.3%'),marginLeft:wp('1%'),marginEnd:wp('1%')}}>__</Text>
            <Text style={{fontSize:moderateScale(26),fontWeight:'bold',color:'#fff',marginTop:hp('-3%'),marginLeft:wp('1%'),marginEnd:wp('1%')}}>_</Text>
            <Text style={{fontSize:moderateScale(18),fontWeight:'bold',color:'#fff',marginTop:hp('-2%'),marginLeft:wp('1%'),marginEnd:wp('1%')}}>__</Text>
            </TouchableOpacity>
            </View>
            {/* <Icon
              name="menu"
              size={40}
              color="#ffffff"
              onPress={() => props.navigation.openDrawer()}
            /> */}
            <View style={styles.notification}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('notifications')}>
                <Icon name="notifications-outline" size={35} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={styles.notificationtext}>
              <Text style={styles.belltext}>2</Text>
            </View>
          </View>
          <View style={styles.fiya}>
            <Image
              style={styles.profilepic}
              source={require('../assets/image/car.jpg')}></Image>
            <Text style={styles.name}>{data ? data.username : 'No name'}</Text>
            <View style={styles.procontainer}>
              <View style={styles.walleticon}>
                <Icon name="wallet-outline" color="white" size={22} />
              </View>
              <View style={styles.basic}>
                <Text style={styles.points}>300</Text>
              </View>
              <View style={styles.flameicon}>
                <Icon name="flame-outline" color="white" size={18} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <SegmentedControlTab
            values={['Ongoing', 'Past Posts']}
            selectedIndex={customStyleIndex}
            onTabPress={handleCustomIndexSelect}
            borderRadius={20}
            tabsContainerStyle={{
              height: hp('7%'),
              width: wp('100%'),
              backgroundColor: '#F2F2F2',
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
            }}
            tabStyle={{
              backgroundColor: '#F2F2F2',
              borderWidth: 0,
              borderColor: 'transparent',
            }}
            activeTabStyle={{
              backgroundColor: '#F2F2F2',
              marginTop: 2,
              borderBottomWidth: 3,
              borderBottomColor: '#1ab2ff',
            }}
            tabTextStyle={{
              color: '#888888',
              fontFamily: 'Poppins-Bold',
              fontSize: moderateScale(16),
              lineHeight: 21,
            }}
            activeTabTextStyle={{
              color: '#444444',
              fontFamily: 'Poppins-Bold',
              fontSize: moderateScale(16),
              lineHeight: 21,
            }}
          />
          {customStyleIndex === 0 && (
            <View style={styles.basic1}>
              {posts.map((post, index) => {
                return (
                  <View style={styles.basic1} key={index}>
                    <View style={styles.heading}>
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
                        <Icon
                          name="ellipsis-vertical-outline"
                          color="grey"
                          size={25}
                        />
                      </View>
                    </View>
                    <View style={styles.detailbox}>
                      <View style={styles.detail1}>
                        <View style={styles.touch}>
                          <TouchableOpacity
                            onPress={() =>
                              props.navigation.navigate('homeongoing', {post})
                            }>
                            <Text style={styles.chaptertitle}>
                              {post.title}
                            </Text>
                            <Text style={styles.chaptername}>Computer Science</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.procontainer1}>
                          <View style={styles.basic}>
                            <Text style={styles.pointsbot}>{post.fp}</Text>
                          </View>
                          <View style={styles.flameicon}>
                            <Icon
                              name="flame-outline"
                              color="orange"
                              size={18}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.captionview}>
                        <Text style={styles.description}>
                          {post.description}
                        </Text>
                      </View>
                      <View>
                        {/* <View style={styles.insideview}>
                          <Image
                            style={styles.insidepic}
                            source={require('../assets/image/car.jpg')}></Image>
                        </View> */}
                        {/* {post.media.map((image, imgIndex) => {
                          if (index === 0) {
                            console.log('Images: ' + imgIndex + ' // ' + image);
                          }
                          return (
                            <View key={imgIndex} style={styles.insideview}>
                              <Image
                                style={styles.insidepic}
                                source={{url: image}}></Image>
                            </View>
                          );
                        })} */}
                      </View>
                    </View>
                  </View>
                );
              })}

              <View style={styles.heading}>
                <View style={styles.basic}>
                  <Image
                    style={styles.onpostpic}
                    source={require('../assets/image/gal.png')}></Image>
                </View>
                <View style={styles.titlebox}>
                  <Text style={styles.nametitle}>Gal_Gadot</Text>
                  <Text style={styles.occupation}>Actress / Model </Text>
                </View>
                <View style={styles.ellipsis}>
                  <Icon
                    name="ellipsis-vertical-outline"
                    color="grey"
                    size={25}
                  />
                </View>
              </View>
              <View style={styles.basic}>
                <View style={styles.detailbox}>
                  <View style={styles.detail1}>
                    <View style={styles.touch}>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('homeongoing')
                        }>
                        <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                        <Text style={styles.chaptername}>Algebra</Text>
                      </TouchableOpacity>
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of lorm.
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
              </View>
            </View>
          )}
          {customStyleIndex === 1 && (
            <View style={styles.basic1}>
              <View style={styles.heading}>
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
                  <Icon
                    name="ellipsis-vertical-outline"
                    color="grey"
                    size={25}
                  />
                </View>
              </View>
              <View style={styles.detailbox}>
                <View style={styles.detail1}>
                  <View style={styles.touch}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('homeongoing')}>
                      <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                      <Text style={styles.chaptername}>Algebra</Text>
                    </TouchableOpacity>
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of lorm.
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
              <View style={styles.heading}>
                <View style={styles.basic}>
                  <Image
                    style={styles.onpostpic}
                    source={require('../assets/image/gal.png')}></Image>
                </View>
                <View style={styles.titlebox}>
                  <Text style={styles.nametitle}>Gal_Gadot</Text>
                  <Text style={styles.occupation}>Actress / Model </Text>
                </View>
                <View style={styles.ellipsis}>
                  <Icon
                    name="ellipsis-vertical-outline"
                    color="grey"
                    size={25}
                  />
                </View>
              </View>
              <View style={styles.basic}>
                <View style={styles.detailbox}>
                  <View style={styles.detail1}>
                    <View style={styles.touch}>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('homeongoing')
                        }>
                        <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                        <Text style={styles.chaptername}>Algebra</Text>
                      </TouchableOpacity>
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of lorm.
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
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({

// });

export default hamburger;
