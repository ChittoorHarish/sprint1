import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Button,
  Dimensions,
  tintcolor,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextComponent,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  moderateScale,
  heightPercentageToDP,
} from '../services/responsiveFunc';

import SplashScreen from '../pages/SplashScreen/SplashScreen';
import Onboarding from '../pages/Onboarding/Onboarding';
import signin from '../pages/signin/signin';
import signup from '../pages/signup/signup';
import forgotpassword from '../pages/forgotpassword/forgotpassword';
import newpassword from '../pages/newpassword/newpassword';
import search from '../pages/search/search';
import hamburger from '../pages/hamburger/hamburger';
import {getActiveChildNavigationOptions} from 'react-navigation';
import Profile from '../pages/Profile/Profile';
import wallet from '../pages/wallet/wallet';
import settings from '../pages/settings/settings';
import notification from '../pages/notification/notification';
import paymentinfo from '../pages/paymentinfo/paymentinfo';
import termsofuse from '../pages/termsofuse/termsofuse';
import logout from '../pages/logout/logout';
import homeongoing from '../pages/homeongoing/homeongoing';
import homeongoing1 from '../pages/homeongoing1/homeongoing1';
import callschedule from '../pages/callschedule/callschedule';
import joincall from '../pages/joincall/joincall';
import applicantprofile from '../pages/applicantprofile/applicantprofile';
import postprofile from '../pages/postprofile/postprofile';
import notifications from '../pages/notifications/notifications';
import CustomSidebarMenu from '../pages/CustomSidebarMenu/CustomSidebarMenu';
import termsandconditions from '../pages/termsandconditions/termsandconditions';
import editongoing from '../pages/editongoing/editongoing';
import searchfilter from '../pages/searchfilter/searchfilter';
import apply from '../pages/apply/apply';
import addpost from "../pages/addpost/addpost";
import {Label} from 'native-base';
import color from 'color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={toggleDrawer}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{width: 25, height: 25, marginLeft: 5}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          title: 'First Page', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="signin"
        component={signin}
        options={{
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#ffffff', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitle: () => (
            <Image
              style={{resizeMode: 'contain', alignSelf: 'center'}}
              source={require('./toplogo.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="signup"
        component={signup}
        options={{
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#ffffff', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold', //Set Header text style
          },
          headerTitle: () => (
            <Image
              style={{resizeMode: 'contain', alignSelf: 'center'}}
              source={require('./toplogo.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="forgotpassword"
        component={forgotpassword}
        options={{
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#ffffff', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold', //Set Header text style
          },
          headerTitle: () => (
            <Image
              style={{resizeMode: 'contain', alignSelf: 'center'}}
              source={require('./toplogo.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="newpassword"
        component={newpassword}
        options={{
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#ffffff', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold', //Set Header text style
          },
          headerTitle: () => (
            <Image
              style={{resizeMode: 'contain', alignSelf: 'center'}}
              source={require('./toplogo.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="termsandconditions"
        component={termsandconditions}
        options={{
          title: 'Terms and Conditions',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="homeongoing"
        component={homeongoing}
        options={{
          title: ' ',
          headerBackTitle: 'Ongoing Post',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerBackTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
          
        }}
      />
      <Stack.Screen
        name="homeongoing1"
        component={homeongoing1}
        options={{
          title: 'Ongoing Post',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="callschedule"
        component={callschedule}
        options={{
          title: 'Ongoing Post',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="joincall"
        component={joincall}
        options={{
          title: ' ',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerLeft: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              {/* <TouchableOpacity onPress={()=>{navigation.navigate('search')}}> */}
              <Icon name="arrow-back-outline" color="white" size={22} />
              {/* </TouchableOpacity> */}
              <Text
                style={{
                  fontSize: moderateScale(16),
                  lineHeight: 25,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Ongoing Post
              </Text>
            </View>
          ),

          headerRight: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginEnd: wp('1%'),
                width: wp('35%'),
                borderWidth: 1,
                borderColor: 'transparent',
              }}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  width: wp('33%'),
                  padding: 3,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: wp('30%'),
                    marginLeft: wp('1%'),
                    marginEnd: wp('1%'),
                    borderRadius: 5,
                    padding: 2,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: wp('1%'),
                        borderRadius: 10,
                        backgroundColor: 'rgb(41,177,0)',
                        width: wp('9%'),
                        height: hp('4%'),
                      }}>
                      <Icon name="videocam-outline" color="white" size={22} />
                    </View>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: moderateScale(12),
                        color: 'rgb(41,177,0)',
                        marginLeft: wp('2%'),
                      }}>
                      Join Call
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="applicantprofile"
        component={applicantprofile}
        options={{
          title: 'Ongoing Post',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
          headerTitle: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginEnd: wp('1%'),
                width: wp('85%'),
                marginLeft: wp('2%'),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  lineHeight: 25,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
       <Stack.Screen
        name="postprofile"
        component={postprofile}
        options={{
          title: 'Ongoing Post',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
          headerTitle: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginEnd: wp('1%'),
                width: wp('85%'),
                marginLeft: wp('2%'),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  lineHeight: 25,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="editongoing"
        component={editongoing}
        options={{
          title: ' ',
          headerBackTitle: 'Edit Ongoing Post',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
         
        }}
      />
      <Stack.Screen
        name="notifications"
        component={notifications}
        options={{
          title: 'Ongoing Post',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },

          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
          headerTitle: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginEnd: wp('1%'),
                width: wp('85%'),
                marginLeft: wp('2%'),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  lineHeight: 25,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Notifications
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="searchfilter"
        component={searchfilter}
        options={{
          title: ' ',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerLeft: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              {/* <TouchableOpacity onPress={()=>{navigation.navigate('search')}}> */}
              <Icon name="arrow-back-outline" color="white" size={22} />
              {/* </TouchableOpacity> */}
              <Text
                style={{
                  fontSize: moderateScale(16),
                  lineHeight: 25,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Search Result
              </Text>
            </View>
          ),

          headerRight: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginEnd: wp('1%'),
                width: wp('25%'),
                borderWidth: 1,
                borderColor: 'transparent',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'transparent',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  padding: 2,
                  width: wp('22%'),
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    transform: [{rotate: '270deg'}],
                  }}>
                  <Icon name="options" size={30} color={'white'} />
                </View>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    marginLeft: wp('1.5%'),
                    marginTop: hp('0.3%'),
                  }}>
                  <Icon
                    name="notifications-outline"
                    size={30}
                    color={'white'}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      backgroundColor: 'white',
                      marginLeft: wp('-3.7%'),
                      marginTop: hp('-1%'),
                      marginEnd: wp('3%'),
                    }}>
                    <Text
                      style={{
                        fontSize: moderateScale(10),
                        color: '#1ab2ff',
                        fontFamily: 'Poppins-Regular',
                        textAlign: 'center',
                        width: wp('4%'),
                        height: hp('1.75%'),
                      }}>
                      2
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="apply"
        component={apply}
        options={{
          title: 'APPLY',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },

          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
          headerTitle: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginEnd: wp('1%'),
                width: wp('85%'),
                marginLeft: wp('2%'),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  lineHeight: 25,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Apply
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: wp('25%'),
                borderWidth: 1,
                borderColor: 'transparent',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    borderWidth: 0.1,
                    height: hp('4.8%'),
                    width: wp('10%'),
                    borderRadius: 20,
                  }}
                  source={require('../pages/assets/image/gal.png')}></Image>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="addpost"
        component={addpost}
        options={{
          title: 'Add Post',
          headerBackTitle: ' ',
          headerStyle: {
            height: hp('12%'),
            backgroundColor: '#1ab2ff', //Set Header color
          },

          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(17), //Set Header text style
          },
          headerTitle: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginEnd: wp('1%'),
                width: wp('85%'),
                marginLeft: wp('2%'),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  lineHeight: 25,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Add Post
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: wp('25%'),
                borderWidth: 1,
                borderColor: 'transparent',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    borderWidth: 0.1,
                    height: hp('4.8%'),
                    width: wp('10%'),
                    borderRadius: 20,
                  }}
                  source={require('../pages/assets/image/gal.png')}></Image>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

function BottomTabNavigator(props,navigation) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1ab2ff',
        showLabel: true,
        showIcon: true,
      }}
      initialRouteName="Home"
      shifting="false">
      <Tab.Screen
        name="Home"
        component={hamburger}
        options={{
          title: 'Ham',
          tabBarLabel: () =>null,
          tabBarIcon: ({color}) => 
         
            <Icon name="home" color={color} size={25} />
           
        }}
      />
      <Tab.Screen
        name="settings"
        component={settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({}) => (
            <TouchableOpacity
              style={{
                position: 'relative',
                bottom: 9, // space from bottombar
                height: 60,
                zIndex: 1,
                width: 62,
                borderRadius: 30,
                backgroundColor: '#1ab2ff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="add" color={'#ffffff'} size={35} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={search}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        labelStyle: {fontFamily: 'Poppins-Regular'},
        itemStyle: {},
        contenComponent: createDrawerNavigator,
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}
      drawerStyle={{
        width: wp('78%'),
        backgroundColor: '#ffffff',
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="home-outline" color="black" size={25} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'My Profile',
          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="person-outline" color="black" size={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="wallet"
        component={wallet}
        options={{
          title: 'My Wallet',

          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="wallet-outline" color="black" size={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="setting"
        component={settings}
        options={{
          title: 'Settings',
          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="settings-outline" color="black" size={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="notification"
        component={notification}
        options={{
          title: 'Notification',
          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="notifications-outline" color="black" size={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="paymentinfo"
        component={paymentinfo}
        options={{
          title: 'Payment Information',
          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="card-outline" color="black" size={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="termsofuse"
        component={termsofuse}
        options={{
          title: 'Terms of Use',
          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="document-text-outline" color="black" size={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="logout"
        component={logout}
        options={{
          title: 'Log Out',
          drawerIcon: () => (
            <View
              style={{
                padding: 3,
                borderWidth: 0.5,
                borderRadius: 5,
                backgroundColor: '#f2f2f2',
              }}>
              <Icon name="log-out-outline" color="black" size={25} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export {
  MainStackNavigator,
  ContactStackNavigator,
  BottomTabNavigator,
  DrawerNavigator,
};
