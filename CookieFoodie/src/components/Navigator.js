import React from 'react';
import { connect } from 'react-redux';
import { Container, Footer, FooterTab, Button } from 'native-base'
import { View, Image } from 'react-native'
import { homeScene, profileScene } from '../actions'
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles/Navigator.styles.js'


const FooterNavigation = (props) => (

  <View style={Styles.box}>
    <FooterTab>
      <Button onPress={() => props.homeScene('HOME')}>
        {props.scene === "HOME" ? <Icon size={25} name='ios-home' /> : <Icon size={25} name='ios-home-outline' />}
      </Button>
      <Button onPress={() => props.setModalVisible()}>
        <Icon size={25} name='ios-add-circle-outline' />
      </Button>
      <Button onPress={() => props.profileScene('PROFILE')}>
        {props.scene === "PROFILE" ? <Image source={require('../image/Didit.jpg')} style={{height:23, width:23, borderRadius: 5, borderWidth: 1, borderColor:'yellow'}} /> : <Image source={require('../image/Didit.jpg')} style={{height:23, width:23, borderRadius: 5}} />}
      </Button>
    </FooterTab>
  </View>

)

const mapDispatchToProps = (dispatch) => {
  return{
    homeScene: (tab) => dispatch(homeScene(tab)),
    profileScene: (tab) => dispatch(profileScene(tab))
  }
}

const mapStateToProps = (state) => {
  return{
    scene: state.scene
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (FooterNavigation)
