import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';

const hamburger = ({navigation}) => {
  return (
    <View style={styles.center}>
      <View style={styles.ham}>
      <View style={styles.icon}>
      <Icon
                name="menu"
                size={40}
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              />
      </View>
      <View style={styles.fiya}>
        <Text style={{fontSize:moderateScale(30),fontWeight:'bold',color:'white'}}>FIYA</Text>

      </View>
      </View>
     
      <Text style={styles.home}>This is Home Screen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default hamburger;