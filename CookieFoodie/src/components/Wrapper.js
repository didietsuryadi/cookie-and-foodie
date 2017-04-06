import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import FooterNavigation from './Navigator';
import Home from './Home';
import Profile from './Profile';
import Posting from './Posting';

const Wrapper = (props) => (
  <View style={styles.container}>
    { props.scene === 'HOME' && <Home /> }
    { /*props.scene === 'PROFILE' || <Profile />*/ }
    { /*props.scene === 'POSTING' || <Posting />*/ }
    <FooterNavigation></FooterNavigation>
  </View>
);

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
