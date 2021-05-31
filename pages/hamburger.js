import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../services/responsiveFunc';

const hamburger = ({navigation}) => {
  return (
    <View style={styles.center}>
      <View style={{height:hp('40%'),width:wp('100%'),backgroundColor:'#1e90ff',borderBottomEndRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
      <View style={{justifyContent:'flex-start',alignItems:'flex-start',marginTop:hp('3%'),marginLeft:wp('3%')}}>
      <Icon
                name="menu"
                size={40}
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              />
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('5%')}}>
        <Text style={{fontSize:moderateScale(30),fontWeight:'bold',color:'white'}}>FIYA</Text>

      </View>
      </View>
     
      <Text style={{textAlign:'center',fontSize:20,justifyContent:'center',alignItems:'center',marginTop:hp('16%'),marginLeft:wp('15%')}}>This is Home Screen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor:'#ffffff'
  },
});

export default hamburger;