import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/home.screen'
import LoginScreen from './screens/login.screen'

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator         initialRouteName="Login">

          <Stack.Screen name = "LoginScreen" component = {LoginScreen}></Stack.Screen>
          <Stack.Screen name = "Home" component = {HomeScreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator