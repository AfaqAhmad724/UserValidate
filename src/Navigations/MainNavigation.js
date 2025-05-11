import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigation from './AuthNavigation'
import FlowNavigation from './FlowNavigation'
import { NavigationContainer } from '@react-navigation/native'

const MAINSTACK = createNativeStackNavigator()
const MainNavigation = () => {
  return (
    <NavigationContainer>
    <MAINSTACK.Navigator screenOptions={{headerShown:false}} initialRouteName='AuthNavigation'>
        <MAINSTACK.Screen name='AuthNavigation' component={AuthNavigation}/>
        <MAINSTACK.Screen name='FlowNavigation' component={FlowNavigation}/>
    </MAINSTACK.Navigator>
    </NavigationContainer>

  )
}

export default MainNavigation

const styles = StyleSheet.create({})