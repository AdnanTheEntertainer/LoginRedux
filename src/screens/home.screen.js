import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.home_container}>
      <Text>Hello Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    margin: 16,
  },
});
