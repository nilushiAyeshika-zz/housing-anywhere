import { ICharacter } from '../../containers/characters/Characters.types'

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR'

export const GET_CHARACTER_DETAILS = 'GET_CHARACTER_DETAILS'
export const GET_CHARACTER_DETAILS_SUCCESS = 'GET_CHARACTER_DETAILS_SUCCESS'
export const GET_CHARACTER_DETAILS_ERROR = 'GET_CHARACTER_DETAILS_ERROR'

export interface IGetCharacters {
  type: typeof GET_CHARACTERS
}

export interface IGetCharactersSuccess {
  type: typeof GET_CHARACTERS_SUCCESS
  payload: { characterList: ICharacter[]; cursor: string; total: number }
}

export interface IGetCharactersError {
  type: typeof GET_CHARACTERS_ERROR
}

export interface IGetCharacterDetails {
  type: typeof GET_CHARACTER_DETAILS
}

export interface IGetCharacterDetailsSuccess {
  type: typeof GET_CHARACTER_DETAILS_SUCCESS
  payload: { characterDetails: ICharacter | null; characterLocationDetails: any, characterEpisodeDetails: { id: number, name: string} }
}

export interface IGetCharacterDetailsError {
  type: typeof GET_CHARACTER_DETAILS_ERROR
}

export type CharactersDispatchTypes = IGetCharacters | IGetCharactersSuccess | IGetCharactersError | IGetCharacterDetails | IGetCharacterDetailsSuccess | IGetCharacterDetailsError
