import { combineReducers } from 'redux'
import { sceneReducer } from './sceneReducer'
import { postReducer } from './postReducer'
import { personReducer } from './personReducer'

const rootReducers = combineReducers({
  scene: sceneReducer,
  timeline: postReducer,
  person: personReducer
})

export default rootReducers;
