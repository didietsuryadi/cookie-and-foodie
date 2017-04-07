import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles/Profile.styles.js'
import Header from './Header'

const Profile = () => (
  <View style={styles.box}>
    <Header></Header>
    <View style={styles.header}>
      <View style={styles.rating}>
        <Image style={styles.image} source={require('../image/Didit.jpg')} />
        <View style={styles.vote}>
          <Text style={styles.textLike}>200</Text>
          <Text>Subscribers</Text>
        </View>
        <View style={styles.vote}>
          <Text style={styles.textLike}>200</Text>
          <Text>Likes</Text>
        </View>
        <View style={styles.vote}>
          <Text style={styles.textLike}>100</Text>
          <Text>Reviewers</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <TouchableOpacity onPress={()=>{}} style={styles.editProfile}>
          <Text>Edit Profile</Text>
        </ TouchableOpacity >
      </View>
    </View>
    <View style={styles.galery}>

    </View>
  </View>
)

export default Profile;
