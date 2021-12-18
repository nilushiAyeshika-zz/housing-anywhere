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

      if (characterData) {
        const characterLocationResponse = await CharactersApi.getCharacterLocationDetails(characterData.location.url)
        const characterLocationDesc = characterLocationResponse.data;
        const episodeIds: number[] = [];
        characterData.episode?.forEach((item: string) => {
          const lastSegment = item.split("/").pop();
          episodeIds.push(parseInt(lastSegment as string));
        })

        const episodeResponse = await CharactersApi.getMultipleEpisodeDetails(episodeIds)
        console.log(episodeResponse.data)
        let episodeData = null
        if (episodeResponse.data?.length > 0) {
          episodeData = episodeResponse.data?.map((item: any) => ({ id: item.id, name: item.name }))
        } else if (episodeResponse.data) {
          episodeData = { id: episodeResponse.data.id, name: episodeResponse.data.name }
        }

        dispatch({
          type: GET_CHARACTER_DETAILS_SUCCESS,
          payload: {
            characterDetails: characterData,
            characterLocationDetails: characterLocationDesc,
            characterEpisodeDetails: episodeData,
          },
        })
      }
    } catch (e) {
      console.log(e)
      dispatch({
        type: GET_CHARACTER_DETAILS_ERROR,
      })
    }
  }
