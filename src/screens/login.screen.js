import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '../redux/action.type';
import { loginSuccess } from "../redux/user.actions";

export default function LoginScreen(props) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const isEnabledSubmit = email.length >= 4 && password.length >= 5;

  const _onLogin = () => {
    setLoading(true);
    Keyboard.dismiss
    if (!email.trim()) {
      alert('Please enter email address');
      return;
    } else if (!password.trim()) {
      alert('Please enter password');
      return;
    } else {
      ToastAndroid.show(
        `Email: ${email} Password: ${password}`,
        ToastAndroid.SHORT,
      );

      dispatch(loginSuccess({name: 'User Redux', age: 25, address: 'Pakistan'}));
      setTimeout(() => {
        setLoading(false)
        return navigation.navigate('Home');
      },500);
    }
  };

  return (
    <SafeAreaView style={styles.login_container}>
      <View style={styles.round_input}>
        <TextInput
          placeholder="Email"
          style={styles.textinput_style}
          textContentType="emailAddress"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.round_input}>
        <TextInput
          placeholder="Password"
          style={styles.textinput_style}
          textContentType="username"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#44bcd8" />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.login_view}
          onPress={() => {
            _onLogin()
          }}>
          <Text style={styles.login_button}>Login</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  login_container: {
    justifyContent: 'center',
    flex: 1,
    margin: 16,
  },

  round_input: {
    height: 50,
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 25,
  },
  textinput_style: {
    marginStart: 10,
    marginEnd: 10,
    textAlign: 'center',
    fontSize: 17,
  },

  login_view: {
    height: 50,
    margin: 16,
    overflow: 'hidden',
    backgroundColor: '#44bcd8',
    justifyContent: 'center',
    elevation: 3,
    borderRadius: 25,
  },
  login_button: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});
