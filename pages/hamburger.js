import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../services/responsiveFunc';

const hamburger = ({navigation}) => {
  return (
    <View style={styles.center}>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('3%'),marginLeft:wp('3%')}}>
      <Icon
                name="menu"
                size={30}
                color="#D4AF37"
                onPress={() => navigation.openDrawer()}
              />
      </View>
      
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