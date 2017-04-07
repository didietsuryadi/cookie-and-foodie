import React from 'react';
import { connect } from 'react-redux';
import { View, Modal, Text, TouchableHighlight } from 'react-native';
import FooterNavigation from './Navigator';
import Home from './Home';
import Profile from './Profile';
import Posting from './Posting';

class Wrapper extends React.Component {
  constructor(){
    super()
    this.state={
      modalVisible: false
    }
  }

  setModalVisible(){
    this.setState({
      modalVisible: !this.state.modalVisible,
    })
  }

  render(){
    return(
      <View style={styles.container}>
        { this.props.scene === 'HOME' && <Profile /> }
        { this.props.scene === 'PROFILE' && <Home /> }
        <FooterNavigation setModalVisible={()=> this.setModalVisible()}></FooterNavigation>
        <Posting state={this.state.modalVisible} setModalVisible={()=> this.setModalVisible()}></Posting>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
}

const mapStateToProps = (state) => {
  return {
    scene: state.scene
  }
}

export default connect(mapStateToProps, null) (Wrapper)
