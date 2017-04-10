import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles/TimeLine.styles'
import NotifNavigation from './notifNavigator'
import Love from './Love.js'
import Cart from './Cart.js'

class LoveList extends React.Component{
  constructor(){
    super()
    this.state={
      scene: 'LOVE'
    }
  }

  changeScene(scene){
    this.setState({
      scene: scene
    })
  }

  render(){
    return(
      <View style={styles.box}>
        <NotifNavigation changeState={(scene) => this.changeScene(scene)} scene={this.state.scene}/>
        { this.state.scene === 'LOVE' && <Love /> }
        { this.state.scene === 'CART' && <Cart /> }
      </View>
    )
  }
}


export default LoveList;
