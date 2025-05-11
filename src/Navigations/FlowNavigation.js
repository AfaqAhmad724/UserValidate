import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/AppFlow/Home'

const FLOW_STACK = createNativeStackNavigator()
const FlowNavigation = () => {
  return (
    <FLOW_STACK.Navigator screenOptions={{headerShown:false}}>
        <FLOW_STACK.Screen name='Home' component={Home}/>
    </FLOW_STACK.Navigator>
  )
}

export default FlowNavigation

const styles = StyleSheet.create({})