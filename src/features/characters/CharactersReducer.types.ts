import { ICharacter } from '../../containers/characters/Characters.types';

export interface ICharactersDefaultState {
  characterList: ICharacter[]
  isLoading: boolean
  nextPageToken: string
  total: number
  characterDetails: ICharacter | null
  characterLocationDetails: any
  isCharacterDetailsLoading: boolean
}
