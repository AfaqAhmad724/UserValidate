import React, { useState } from 'react';
import { View, TextInput, Button, Text, SafeAreaView, StyleSheet, ToastAndroid } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Services/firebaseConfig';
import { Colors } from '../../Utils/Colors';
import { fontSize } from '../../Utils/Fonts';
import Btn from '../../Components/Btn';
import { hp } from '../../Utils/Responsive';
import Textinput from '../../Components/TextInputComp';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessages] = useState('');


  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
      navigation.navigate('Login');
    } catch (error) {
      alert(error.message);
    }
  };
  const handleValidate=()=>{
    if(!email)
    {
        setErrorMessages('Please enter your email')
        ToastAndroid.show('Please enter you email',ToastAndroid.SHORT)
    }
    else{
        handleReset()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}>Reset Password</Text>
      <Textinput
        title={'Email'}
        placeholder={'Enter your email'}
        value={email}
        onChangeText={(text) => {
          setErrorMessages(null);
          setEmail(text);
        }}
        errorMessage={errorMessage}
      />
      <Btn
        text={'Send Reset Email'}
        buttonContainer={{ marginTop: hp(6) }}
        onPress={handleValidate}
      />
   </SafeAreaView>
  );
}

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
})