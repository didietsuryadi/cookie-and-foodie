import React from 'react'
import { View, Text, Modal, TouchableHighlight } from 'react-native'
import styles from './styles/Posting.styles.js'

const Posting = (props) => (

      <Modal
        animationType={"slide"}
        transparent={false}
        visible={props.state}
        onRequestClose={() => {alert("Modal has been closed.")}} >
       <View style={styles.box}>
        <View>
          <Text>Hello World!</Text>
          <TouchableHighlight onPress={() => {
            props.setModalVisible()
          }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
       </View>
      </Modal>
    )


export default Posting;
