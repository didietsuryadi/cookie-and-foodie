import React from 'react';
import { View, Image, TouchableOpacity  } from 'react-native'
import Styles from './styles/Header.styles.js'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => (
  <View style={Styles.box} >
    <TouchableOpacity>
      <Icon size={20} name='ios-search' />
    </TouchableOpacity>
    <Image style={Styles.image} source={require('../image/Cookie&Foodie.png')} />
  </View>
)

export default Header;
