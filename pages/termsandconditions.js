import React from "react";
import { View, StyleSheet, Text } from "react-native";

const termsandconditions = () => {
  return (
    <View style={styles.center}>
        <View style={{justifyContent:'flex-start',alignItems:'center',marginLeft:('5%'),marginEnd:('5%')}}>
            <Text style={{fontSize:20}}>T & C</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
});

export default termsandconditions;