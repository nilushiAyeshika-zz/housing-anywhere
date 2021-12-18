import { Dispatch } from 'redux'

import {
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTER_DETAILS,
  GET_CHARACTER_DETAILS_SUCCESS,
  GET_CHARACTER_DETAILS_ERROR,
  CharactersDispatchTypes,
} from './CharactersAction.types'

import CharactersApi from '../../api/CharactersApi'

export const getCharacters =
  (page: number) =>
  async (dispatch: Dispatch<CharactersDispatchTypes>) => {
    try {
      dispatch({ type: GET_CHARACTERS })
      const charactersResponse = await CharactersApi.getCharacters(page)
      // console.log(charactersResponse.data.results)
      const charactersData = charactersResponse.data
      const charactersResults = charactersData.results
      const nextToken = charactersData.info.next
      const totalItems = charactersData.info.count

        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: {
            characterList: charactersResults,
            cursor: nextToken,
            total: totalItems,
          },
        })
    } catch (e) {
      dispatch({
        type: GET_CHARACTERS_ERROR,
      })
    }
  }

  export const getCharacterDetails =
  (id: number) =>
  async (dispatch: Dispatch<CharactersDispatchTypes>) => {
    try {
      dispatch({ type: GET_CHARACTER_DETAILS })
      const characterResponse = await CharactersApi.getCharacterDetails(id)
      const characterData = characterResponse.data;
      // console.log(characterResponse.data)

      if (characterResponse.data) {
        const characterLocationResponse = await CharactersApi.getCharacterLocationDetails(characterData.location.url)
        const characterLocationDesc = characterLocationResponse.data;
        // console.log(characterLocationDesc)

        dispatch({
          type: GET_CHARACTER_DETAILS_SUCCESS,
          payload: {
            characterDetails: characterData,
            characterLocationDetails: characterLocationDesc,
          },
        })
      }
    } catch (e) {
      dispatch({
        type: GET_CHARACTER_DETAILS_ERROR,
      })
    }
  }
