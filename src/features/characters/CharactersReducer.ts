import {
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTER_DETAILS,
  GET_CHARACTER_DETAILS_SUCCESS,
  GET_CHARACTER_DETAILS_ERROR,
  CharactersDispatchTypes,
} from './CharactersAction.types'
import { ICharactersDefaultState } from './CharactersReducer.types'

const defaultState: ICharactersDefaultState = {
  characterList: [],
  isLoading: false,
  nextPageToken: '',
  total: 0,
  characterDetails: null,
  characterLocationDetails: null,
  characterEpisodeDetails: null,
  isCharacterDetailsLoading: false,
  isCharacterDetailsError: false,
}

const CharactersReducer = (
  state: ICharactersDefaultState = defaultState,
  action: CharactersDispatchTypes
): ICharactersDefaultState => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        isLoading: true,
        characterList: [...state.characterList],
        nextPageToken: state.nextPageToken,
        total: state.total,
      }
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characterList: [...state.characterList, ...action.payload.characterList],
        nextPageToken: action.payload.cursor,
        total: action.payload.total,
      }
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        characterList: [...state.characterList],
        nextPageToken: state.nextPageToken,
        total: state.total,
      }
    case GET_CHARACTER_DETAILS:
      return {
        ...state,
        isCharacterDetailsLoading: true,
        characterDetails: null,
        characterLocationDetails: null,
        characterEpisodeDetails: null,
        isCharacterDetailsError: false,
      }
    case GET_CHARACTER_DETAILS_SUCCESS:
      return {
        ...state,
        isCharacterDetailsLoading: false,
        characterDetails: action.payload.characterDetails,
        characterLocationDetails: action.payload.characterLocationDetails,
        characterEpisodeDetails: action.payload.characterEpisodeDetails,
        isCharacterDetailsError: false,
      }
    case GET_CHARACTER_DETAILS_ERROR:
      return {
        ...state,
        isCharacterDetailsLoading: false,
        characterDetails: null,
        characterLocationDetails: null,
        characterEpisodeDetails: null,
        isCharacterDetailsError: true,
      }
    default:
      return state
  }
}

export default CharactersReducer
