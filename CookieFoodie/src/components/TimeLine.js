import React from 'react'
import { View, Text, ListView, Image, TouchableOpacity } from 'react-native'
import styles from './styles/TimeLine.styles'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const TimeLine = (props) => (
  <View style={styles.box}>
    <ListView
      dataSource={props.timeline}
      renderRow={(post) => (
        <View style={styles.card}>
          <View style={styles.header}>
            <Image source={{uri: post.photoProfile}} style={{height:30, width:30, borderRadius: 5}} />
            <Text style={{padding: 5, fontWeight:'bold', opacity: 0.8}}>{post.username}</Text>
            <Text style={{padding: 5, opacity: 0.5}}>1 minutes ago</Text>
          </View>
          <View style={styles.content}>
            <Image source={{uri: post.photo}} style={{height:250}} />
          </View>
          <View style={styles.option}>
            <TouchableOpacity>
              <Icon size={25} name='ios-heart-outline' style={{padding: 5, opacity: 0.8}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon size={25} name='ios-text-outline' style={{padding: 5, opacity: 0.8}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon size={25} name='ios-basket-outline' style={{padding: 5, opacity: 0.8}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon size={25} name='ios-share-outline' style={{padding: 5, opacity: 0.8, paddingLeft:220}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon size={25} name='ios-bookmark-outline' style={{padding: 5, opacity: 0.8}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.caption}>
            <Text style={{paddingBottom:5, fontWeight:'bold'}}>{post.likes.length} loved</Text>
            <Text>{post.username} : {post.caption}</Text>
          </View>
          <View style={styles.comment}>
            <TouchableOpacity>
              <Text style={{fontWeight:'bold', opacity:0.5}}>Tampilkan {post.comments.length} komentar ...</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  </View>
)

const mapStateToProps = (state) => {
  return {
    timeline: ds.cloneWithRows(state.timeline)
  }
}

export default connect(mapStateToProps,null) (TimeLine)
