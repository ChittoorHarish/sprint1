// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import styles from './styles';
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { widthPercentageToDP } from './services/responsiveFunc';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomSidebarMenu = (props) => {
  const [data, setData] = useState({});

  useEffect(async () => {
    let token = await AsyncStorage.getItem('auth_token');
    let userid = await AsyncStorage.getItem('auth_userid');
 //  setAuthtoken(a.id)
   fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/profile?user_id=" + userid,
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
    <SafeAreaView style={{flex: 1}}>
      
     <View style={styles.main}>
     <View style={styles.wrong}>
       <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
       <Icon name="close-outline" size={35} color={'white'}
       />
       </TouchableOpacity>
       </View>
     <View style={styles.fiya}>
       
        <Image style={styles.profilepic}
        source={require('../assets/image/car.jpg')}>

        </Image>
        <Text style={styles.name}>{data ? data.firstname: 'No name'}</Text>
        <Text style={styles.occupation}>College Student</Text>
       

      </View>

     </View>
     
      
        <DrawerItemList {...props} />
        
      
     
      </SafeAreaView>

  );
};

export default CustomSidebarMenu;