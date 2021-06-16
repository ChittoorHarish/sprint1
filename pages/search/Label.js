import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  moderateScale,
  heightPercentageToDP,
} from '../../services/responsiveFunc';

const Label = ({ text, ...restProps }) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 4,
    width:wp('12%'),
    shadowColor:'#000',shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,  
    elevation: 4,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 4,
  },
  text: {
    fontSize: moderateScale(10),
    color: 'rgb(80,80,80)',
  },
});

export default memo(Label);