import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { Avatar } from 'react-native-elements'

const UserProfileScreen = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.infoBlock}>
        <Text style = {styles.label}>email: </Text>
        <Text style = {styles.mainInfo}>{auth?.currentUser.email}</Text>
      </View>
      <View style = {styles.infoBlock}>
        <Text style = {styles.label}>name: </Text>
        <Text style = {styles.mainInfo}>{auth?.currentUser.name || "not found :("}</Text>
      </View>
      <View stylele={styles.infoBlock}>
        <Text style={styles.label}>photo: </Text>
        <Avatar source={{ uri: auth?.currentUser?.photoURL }} style={styles.avatar}/>
      </View>

    </View>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: 'lightgrey',
    alignSelf: 'center'
  },
  mainInfo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '30%',
    aspectRatio: 1
  },
  infoBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  }
})