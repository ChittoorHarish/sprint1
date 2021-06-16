import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const Notch = props => {
  return (
    <View style={styles.root} {...props}/>
  );
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 2,
    height: 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'rgb(256,256,256)',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});