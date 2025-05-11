import { Alert, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useState } from 'react';
import Textinput from '../../Components/TextInputComp';
import { Colors } from '../../Utils/Colors';
import { fontSize } from '../../Utils/Fonts';
import { hp } from '../../Utils/Responsive';
import { TextData } from '../../Utils/TextData';
import { useNavigation } from '@react-navigation/native';
import Btn from '../../Components/Btn';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../Services/firebaseConfig';

const SignUp = () => {
  const navigation = useNavigation();
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessages] = useState({});

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      );

      await sendEmailVerification(userCredential.user);

      Alert.alert('Success', 'Verification email sent. Please check your inbox.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Sign up Error', error?.code);
    }
  };

  const handleValidation = () => {
    if (!registerData.email) {
      setErrorMessages({ ...errorMessage, emailError: 'Please enter your email' });
      ToastAndroid.show('Please enter your email', ToastAndroid.SHORT);
    } else if (!registerData.password) {
      setErrorMessages({ ...errorMessage, passError: 'Please enter your password' });
      ToastAndroid.show('Please enter your password', ToastAndroid.SHORT);
    } else {
      handleSignUp();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}>Sign Up</Text>

      <Textinput
        title={'Email'}
        placeholder={'Enter your Email'}
        value={registerData.email}
        onChangeText={(text) => {
          setErrorMessages((prev) => ({ ...prev, emailError: null }));
          setRegisterData((prev) => ({ ...prev, email: text }));
        }}
        errorMessage={errorMessage.emailError}
      />

      <Textinput
        title={'Password'}
        placeholder={'Enter your Password'}
        value={registerData.password}
        onChangeText={(text) => {
          setErrorMessages((prev) => ({ ...prev, passError: null }));
          setRegisterData((prev) => ({ ...prev, password: text }));
        }}
        errorMessage={errorMessage.passError}
      />

      <Btn
        text={'Sign Up'}
        buttonContainer={{ marginTop: hp(6) }}
        onPress={handleValidation}
      />

      <View style={styles.dontHaveText}>
        <Text style={styles.accountText}>
          {TextData?.haveAccount}
          <Text style={styles.signUpText} onPress={() => navigation.navigate('Login')}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
  },
  loginText: {
    marginTop: hp(10),
    fontSize: fontSize.XL1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyles: {
    marginTop: hp(5),
  },
  signUpText: {
    color: Colors.orange,
    fontSize: fontSize.S3,
  },
  accountText: {
    color: Colors.slateGray,
  },
  dontHaveText: {
    alignItems: 'center',
    marginTop: hp(5),
  },
});
