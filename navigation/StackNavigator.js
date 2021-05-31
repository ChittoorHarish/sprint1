import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';
import { Button,Dimensions,tintcolor, View,Text, ScrollView,SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../services/responsiveFunc';

import SplashScreen from '../pages/SplashScreen/SplashScreen';
import Onboarding from '../pages/Onboarding/Onboarding.'
import signin from '../pages/signin/signin';
import signup from '../pages/signup/signup';
import forgotpassword from '../pages/forgotpassword/forgotpassword';
import newpassword from '../pages/newpassword/newpassword';
import Contact from "../pages/Contact/Contact";
import hamburger from "../pages/hamburger/hamburger";
import { getActiveChildNavigationOptions } from "react-navigation";
import Profile from "../pages/Profile/Profile";
import wallet from "../pages/wallet/wallet";
import settings from "../pages/settings/settings";
import notification from "../pages/notification/notification";
import paymentinfo from "../pages/paymentinfo/paymentinfo";
import termsofuse from "../pages/termsofuse/termsofuse";
import logout from "../pages/logout/logout";
import termsandconditions from "../pages/termsandconditions/termsandconditions";
import { Label } from "native-base";
import color from "color";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator ();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="SplashScreen">
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
            headerStyle: {
              height:hp('9%'),
              backgroundColor: '#ffffff', //Set Header color
            },
            headerTintColor: '#000000', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitle: () =>(
              <Image style={{resizeMode:'contain',alignSelf:'center',marginEnd:wp('15%')}}
              source={require('../assets/Image/toplogo.png')}/>
              
            ),
          }}
        />
      <Stack.Screen
          name="signup"
          component={signup}
          options={{ 
            headerStyle: {
              height:hp('9%'),
              backgroundColor: '#ffffff', //Set Header color
            },
            headerTintColor: '#000000', //Set Header text color
            headerTitleStyle: {
              fontFamily:'Poppins-Bold', //Set Header text style
            },
            headerTitle: () =>(
              <Image style={{resizeMode:'contain',alignSelf:'center',marginEnd:wp('15%')}}
              source={require('../assets/Image/toplogo.png')}/>
              
            ),
          }}
        />
         <Stack.Screen
          name="hamburger"
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
            headerStyle: {
              height:hp('9%'),
              backgroundColor: '#ffffff', //Set Header color
            },
            headerTintColor: '#000000', //Set Header text color
            headerTitleStyle: {
              fontFamily:'Poppins-Bold', //Set Header text style
            },
            headerTitle: () =>(
              <Image style={{resizeMode:'contain',alignSelf:'center',marginEnd:wp('15%')}}
              source={require('../assets/Image/toplogo.png')}/>
              
            ),
          }}
        />
      <Stack.Screen
          name="newpassword"
          component={newpassword}
          options={{ 
            headerStyle: {
              height:hp('9%'),
              backgroundColor: '#ffffff', //Set Header color
            },
            headerTintColor: '#000000', //Set Header text color
            headerTitleStyle: {
              fontFamily:'Poppins-Bold', //Set Header text style
            },
            headerTitle: () =>(
              <Image style={{resizeMode:'contain',alignSelf:'center',marginEnd:wp('15%')}}
              source={require('../assets/Image/toplogo.png')}/>
              
            ),
          }}
        />
         <Stack.Screen
          name="termsandconditions"
          component={termsandconditions}
          options={{ 
            title:"Terms and Conditions",
            headerStyle: {
              height:hp('9%'),
              backgroundColor: '#1e90ff', //Set Header color
            },
            headerTintColor: '#ffffff', //Set Header text color
            headerTitleStyle: {
              fontFamily:'Poppins-Bold',
              fontSize:moderateScale(17) //Set Header text style
            },
          }}
        />
    </Stack.Navigator>
  );
}
const ContactStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }

  function BottomTabNavigator() {
    return (
      <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor:'#1e90ff',
        activeTintColor:'#1e90ff',
        inactiveTintColor: 'grey', 
        showLabel:true,
        showIcon:true,
      }}

      initialRouteName="Home"
      shifting='false'>
        
        <Tab.Screen name="Home"  component={hamburger}
        options={{
          title: 'Ham',
          tabBarLabel:() =>null,
          tabBarIcon: () =>(
            <View style={{borderWidth:0.5,borderRadius:50,backgroundColor:'#ffffff',height:hp('4%'),width:wp('8%'),justifyContent:'center',alignItems:'center'}}>
            <Icon name="home-outline" color="#1e90ff" size={25}/>
            </View>
          ),
          
        }}/>
        <Tab.Screen name="settings" component={settings} 
        options={{
          tabBarLabel:() =>null,
          tabBarIcon: () =>(
            <View style={{position: 'absolute',
            height: hp('8%'),
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Icon name="add-circle-outline" color="#48d1cc" size={50}/>
            </View>
          ),
          
        }}/>
        <Tab.Screen name="Contact" component={Contact} 
        options={{
          tabBarLabel:() =>null,
          tabBarIcon: () =>(
            <View style={{borderWidth:0.5,borderRadius:50,backgroundColor:'#ffffff',height:hp('4%'),width:wp('8%'),justifyContent:'center',alignItems:'center'}}>
            <Icon name="search-outline" color="#1e90ff" size={25}/>
            </View>
          ),
          
        }}/>
      </Tab.Navigator>
    );
  }

  function DrawerNavigator() {
    return(
      <Drawer.Navigator
      drawerContentOptions={{
        labelStyle:{fontFamily:'Poppins-Regular'},
        itemStyle:{marginTop:12},
        contenComponent:createDrawerNavigator
      }}
      
      drawerStyle={{
        
        backgroundColor:'#ffffff',
        
      }}
      initialRouteName="Home">

<Drawer.Screen name="Home" component={BottomTabNavigator} options={{
           title: 'Home',
           
           drawerIcon: () => (
             <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="home-outline" color="black" size={25}/>
            </View>
           ), 
           
        }} />
       
        <Drawer.Screen name="profile" component={Profile} options={{
           title: 'My Profile',
           drawerIcon: () => (
             <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="person-outline" color="black" size={25}/>
            </View>
           ), 
        }} 
        
        />
         <Drawer.Screen name="wallet" component={wallet} options={{
           title: 'My Wallet',
           
           drawerIcon: () => (
            <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="wallet-outline" color="black" size={25}/>
            </View>
           ), 
        }} 
        
        />
         <Drawer.Screen name="setting" component={settings} options={{
           title: 'Settings',
           drawerIcon: () => (
            <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="settings-outline" color="black" size={25}/>
            </View>
           ), 
        }} 
        
        />
         <Drawer.Screen name="notification" component={notification} options={{
           title: 'Notification',
           drawerIcon: () => (
            <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="notifications-outline" color="black" size={25}/>
            </View>
           ), 
        }} 
        
        />
         <Drawer.Screen name="paymentinfo" component={paymentinfo} options={{
           title: 'Payment Information',
           drawerIcon: () => (
            <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="card-outline" color="black" size={25}/>
            </View>
           ), 
        }} 
        
        />
         <Drawer.Screen name="termsofuse" component={termsofuse} options={{
           title: 'Terms Of Use',
           drawerIcon: () => (
            <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="document-text-outline" color="black" size={25}/>
            </View>
           ), 
        }} 
        
        />
         <Drawer.Screen name="logout" component={logout} options={{
           title: 'Logout',
           drawerIcon: () => (
            <View style={{padding:3,borderWidth:0.5,borderRadius:5,backgroundColor:'#dcdcdc'}}>
            <Icon name="log-out-outline" color="black" size={25}/>
            </View>
           ), 
        }} 
        
        />
        
       
        
      </Drawer.Navigator>

    );
  }
  

export { MainStackNavigator, ContactStackNavigator, BottomTabNavigator, DrawerNavigator };