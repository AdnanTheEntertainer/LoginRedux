/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AppNavigator from './src/app.navigator';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';

const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
