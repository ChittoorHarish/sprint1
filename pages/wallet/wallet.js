import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from './styles';
const wallet= () => {
  return (
    <View style={styles.center}>
      <Text>This is the WALLET screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default wallet;