import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux'

export default function HomeScreen() {
  const reduxData = useSelector((state)=>{
    return{
      user: state.user
    }
  })
  console.log(`Redux State: ${reduxData.user.user}`)
  return (
    <SafeAreaView style={styles.home_container}>
      <Text>Hello Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 16,
  },
});
