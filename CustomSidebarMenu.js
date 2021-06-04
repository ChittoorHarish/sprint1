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
         
     <View style={{justifyContent:'center',alignItems:'center',width:wp('78'),height:hp('13%'),backgroundColor:'blue',}}>

     </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
});

export default CustomSidebarMenu;