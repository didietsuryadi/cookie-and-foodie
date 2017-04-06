import React from 'react'
import { Provider } from 'react-redux'
import { Text, View } from 'react-native'
import Wrapper from './components/Wrapper'
import store from './store/index'

const App = () => (
  <Provider store={store}>
    <Wrapper />
  </Provider>
)

export default App;
