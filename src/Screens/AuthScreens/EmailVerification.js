import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Utils/Colors'
import { hp } from '../../Utils/Responsive'
import { fontSize } from '../../Utils/Fonts'
import Textinput from '../../Components/TextInputComp'

const EmailVerification = () => {
    const [emailVerify,setEmailVerify] = useState({email:''})
    const [errorMessage,setErrorMessages] = useState({})

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.loginText}>Email Verification</Text>
        <Textinput
          title={'Email'}
          placeholder={'Enter your Email'}
          value={emailVerify.email}
          onChangeText={text => {
              setErrorMessages({...errorMessage, emailError: null}),
              setRegisterData({...registerData, email: text});
          }}
          errorMessage={errorMessage.emailError}
        />
    </SafeAreaView>
  )
}

export default EmailVerification

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
})