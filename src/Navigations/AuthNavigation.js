import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../Screens/AuthScreens/SignUp'
import Login from '../Screens/AuthScreens/Login'
import EmailVerification from '../Screens/AuthScreens/EmailVerification'
import ResetPassword from '../Screens/AuthScreens/ResetPassword'

const AUTH_STACK = createNativeStackNavigator()
const AuthNavigation = () => {
  return (
    <AUTH_STACK.Navigator screenOptions={{headerShown:false}}>
        <AUTH_STACK.Screen name='Login' component={Login}/>
        <AUTH_STACK.Screen name='SignUp' component={SignUp}/>
        <AUTH_STACK.Screen name='EmailVerification' component={EmailVerification}/>
        <AUTH_STACK.Screen name='ResetPassword' component={ResetPassword}/>


    </AUTH_STACK.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})