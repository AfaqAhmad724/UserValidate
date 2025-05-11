import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Utils/Colors'
import { fontSize } from '../../Utils/Fonts'
import { hp } from '../../Utils/Responsive'
import Btn from '../../Components/Btn'
import { auth } from '../../Services/firebaseConfig'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const user = auth.currentUser
  const navigation = useNavigation()
  const handleLogout=async()=>{
    await auth.signOut()
    navigation.navigate('AuthNavigation')
  }
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.homeText}>{user?.email}</Text>
        <Btn
            text={'Signout'}
            buttonContainer={{ marginTop: hp(6) }}
            onPress={handleLogout}
        />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
  },
  homeText:{
    marginTop:hp(10),
    fontSize:fontSize.XL1,
    alignItems:'center',
    justifyContent:'center'
  },
})