import React from 'react'
import { View, Text, Modal, TouchableHighlight } from 'react-native'
import styles from './styles/Posting.styles.js'
import Icon from 'react-native-vector-icons/Ionicons';

const Posting = (props) => (

      <Modal
        animationType={"slide"}
        transparent={false}
        visible={props.state}
        onRequestClose={() => {alert("Modal has been closed.")}} >
       <View style={styles.box}>
        <View>
          <TouchableHighlight style={{paddingLeft:15}} onPress={() => {
            props.setModalVisible()
          }}>
            <Icon size={25} name='ios-arrow-back' />
          </TouchableHighlight>
        </View>
       </View>
      </Modal>
    )


export default Posting;
