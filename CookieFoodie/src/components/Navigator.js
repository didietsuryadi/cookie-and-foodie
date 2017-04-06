import React from 'react';
import { connect } from 'react-redux';
import { Container, Footer, FooterTab, Button } from 'native-base'
import { View } from 'react-native'
import { homeScene, postingScene, profileScene } from '../actions'
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles/Navigator.styles.js'


const FooterNavigation = (props) => (

  <View style={Styles.box}>
    <FooterTab>
      <Button onPress={() => props.homeScene('HOME')}>
        <Icon size={25} name='ios-home-outline' />
      </Button>
      <Button onPress={() => props.postingScene('POSTING')}>
        <Icon size={25} name='ios-add-circle-outline' />
      </Button>
      <Button onPress={() => props.profileScene('PROFILE')}>
        <Icon size={25} name='ios-person-outline' />
      </Button>
    </FooterTab>
  </View>

)

const mapDispatchToProps = (dispatch) => {
  return{
    homeScene: (tab) => dispatch(homeScene(tab)),
    postingScene: (tab) => dispatch(postingScene(tab)),
    profileScene: (tab) => dispatch(profileScene(tab))
  }
}

export default connect(null, mapDispatchToProps) (FooterNavigation)
