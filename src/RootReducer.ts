import { combineReducers } from 'redux'
import CharactersReducer from './features/characters/CharactersReducer'

const RootReducer = combineReducers({
  characters: CharactersReducer,
})

export default RootReducer
