import React from 'react';
import { FooterTab, Button } from 'native-base'
import { View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles/notifNavigator.styles.js'


const NotifNavigation = (props) => (

  <View style={Styles.box}>
    <FooterTab>
      <Button onPress={() => props.changeState('LOVE')}>
        {props.scene === "LOVE" ? <Icon size={25} name='ios-heart' /> : <Icon size={25} name='ios-heart-outline' />}
      </Button>
      <Button onPress={() => props.changeState('CART')}>
        {props.scene === "CART" ? <Icon size={25} name='ios-basket' /> : <Icon size={25} name='ios-basket-outline' /> }
      </Button>
    </FooterTab>
  </View>

)

export default NotifNavigation;
