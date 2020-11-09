import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';

export default function LoginScreen(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEnabledSubmit = (email.length >= 4 && password.length >= 5);


  const _onLogin = () => {
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
      return navigation.navigate('Home');
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
      <TouchableOpacity
       disabled = {!isEnabledSubmit}
        style={styles.login_view}
        onPress={() => {
          _onLogin();
        }}>
        <Text style={styles.login_button}>Login</Text>
      </TouchableOpacity>
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
