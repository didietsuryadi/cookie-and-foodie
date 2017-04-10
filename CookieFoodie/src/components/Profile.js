import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles/Profile.styles.js'
import Header from './Header'

const Profile = (props) => (
  <View style={styles.box}>
    <Header></Header>
    <View style={styles.header}>
      <View style={styles.rating}>
        <Image style={styles.image} source={{uri: props.person.photo}} />
        <View style={styles.vote}>
          <Text style={styles.textLike}>{props.person.subscribers.length}</Text>
          <Text>Subscribers</Text>
        </View>
        <View style={styles.vote}>
          <Text style={styles.textLike}>{props.person.likes.length}</Text>
          <Text>Likes</Text>
        </View>
        <View style={styles.vote}>
          <Text style={styles.textLike}>{props.person.reviewers.length}</Text>
          <Text>Reviewers</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <TouchableOpacity onPress={()=>{}} style={styles.editProfile}>
          <Text>Edit Profile</Text>
        </ TouchableOpacity >
      </View>
      <View>
        <Text style={{fontWeight:'bold'}}>{props.person.name}</Text>
        <Text>{props.person.bio}</Text>
      </View>
    </View>
    <ScrollView style={{height:400}}>
      <View style={styles.galery}>
        {props.person.collections.map((item,index) => {
          return(
            <TouchableOpacity style={{padding:7, shadowOpacity: 0.2}} key={index}>
              <Image style={styles.galleryImage} source={{uri: item.photo}} />
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  </View>
)

const mapStateToProps = (state) => {
  return{
    person: state.person
  }
}

export default connect(mapStateToProps,null)(Profile);
