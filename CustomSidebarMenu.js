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
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from './services/responsiveFunc';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { widthPercentageToDP } from './services/responsiveFunc';
import { StatusBar } from 'react-native';

const CustomSidebarMenu = (props) => {
 

  return (
    <SafeAreaView style={{flex: 1}}>
         
     <View style={{justifyContent:'center',alignItems:'center',width:wp('78'),height:hp('30%'),marginBottom:hp('0'),backgroundColor:'#1ab2ff',borderBottomEndRadius:30,borderBottomStartRadius:30}}>

     </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
      </DrawerContentScrollView>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
 
});

export default CustomSidebarMenu;