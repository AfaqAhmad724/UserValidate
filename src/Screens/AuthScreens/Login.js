import { Alert, SafeAreaView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Textinput from '../../Components/TextInputComp';
import { Colors } from '../../Utils/Colors';
import { TextData } from '../../Utils/TextData';
import { useNavigation } from '@react-navigation/native';
import { fontSize } from '../../Utils/Fonts';
import { hp, wp } from '../../Utils/Responsive';
import Btn from '../../Components/Btn';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Services/firebaseConfig';

const Login = () => {
    const navigation = useNavigation()
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
      });
  const [errorMessage, setErrorMessages] = useState({});

  const handleLogin=async()=>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth,registerData.email,registerData.password)
        if(userCredential.user.emailVerified)
        {
            navigation.navigate('FlowNavigation')
        }
        else{
            Alert.alert('Please verify your email first')
        }
    }
    catch(error)
    {
       ToastAndroid.show('Invalid Credentials',ToastAndroid.SHORT)
    }
  }

  const handleValidation = () => {
    if (!registerData.email) {
      setErrorMessages({ ...errorMessage, emailError: 'Please enter your email' });
      ToastAndroid.show('Please enter your email', ToastAndroid.SHORT);
    } else if (!registerData.password) {
      setErrorMessages({ ...errorMessage, passError: 'Please enter your password' });
      ToastAndroid.show('Please enter your password', ToastAndroid.SHORT);
    } else {
      handleLogin();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputStyles}>
        <Textinput
          title={'Email'}
          placeholder={'Enter your email'}
          value={registerData?.email}
          onChangeText={text => {
              setErrorMessages({...errorMessage, emailError: null}),
              setRegisterData({...registerData, email: text});
          }}
          errorMessage={errorMessage.emailError}
        />
         <Textinput
          title={'password'}
          placeholder={'Enter your password'}
          value={registerData?.password}
          onChangeText={text => {
              setErrorMessages({...errorMessage, passError: null}),
              setRegisterData({...registerData, password: text});
          }}
          errorMessage={errorMessage.passError}
        />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.forgotPassword}>ForgotPassword?</Text>
        </TouchableOpacity>
        <Btn
            text={'Login'}
            buttonContainer={{ marginTop: hp(6) }}
            onPress={handleValidation}
        />
         <View style={styles.dontHaveText}>
          <Text style={styles.accountText}>
            {TextData?.account}
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate('SignUp')}>
              {' '}
              {'Sign Up'}
            </Text>
          </Text>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        alignItems: 'center',
      },
      loginText:{
        marginTop:hp(10),
        fontSize:fontSize.XL1,
        alignItems:'center',
        justifyContent:'center'
      },
      inputStyles:{
        marginTop:hp(5),
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
      forgotPassword: {
        width: wp(88),
        textDecorationLine: 'underline',
        fontSize: fontSize.S1,
        color: Colors.primary,
      },
})
