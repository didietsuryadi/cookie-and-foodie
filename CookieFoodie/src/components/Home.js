import React from 'react';
import { View, Image  } from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import Styles from './styles/Home.styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './Search.js'
import LoveList from './LoveList.js'
import TimeLine from './TimeLine.js'

const Home = () => (
  <View style={{height:'93%'}}>
    <Tabs initialPage={1}>
        <Tab heading={ <TabHeading style={Styles.tab}><Icon size={20} name='ios-search' /></TabHeading>}>
            <Search />
        </Tab>
        <Tab heading={ <TabHeading style={Styles.tab} ><Image style={Styles.image} source={require('../image/Cookie&Foodie.png')} /></TabHeading>}>
            <TimeLine />
        </Tab>
        <Tab heading={ <TabHeading style={Styles.tab} ><Icon size={20} name="ios-heart-outline" /></TabHeading>}>
            <LoveList />
        </Tab>
    </Tabs>
  </View>
)

export default Home;
