import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux'
import apiCall from '../redux/api.action.creater'

export default function HomeScreen({navigation}) {

  const dispatch = useDispatch()
  const data = useSelector((state)=> state.apiReducer.data)
  const loading = useSelector(state => state.apiReducer.loading)
  const user = useSelector(state => state.userReducer.user)

  useEffect(() => {
    dispatch(apiCall('https://raw.githubusercontent.com/aliadnan282/Testing/master/recipe.json'))
  }, [])

  navigation.setOptions({title: user.address})
  return (
    <SafeAreaView style={styles.home_container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
      <FlatList
      data = {data}
      renderItem = {({item})=>  <Text> {item.headline}</Text>}
      keyExtractor = {(_, index) => index.toString}
      />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16,
  },
});
