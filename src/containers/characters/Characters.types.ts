export interface ICharactersContext {
  isCharactersLoading: boolean
}

export interface ICharacter {
  id: number
  created: string
  episode: string[]
  gender: string
  location: { name: string, url: string }
  name: string
  origin: { name: string, url: string }
  species: string
  status: string
  type: string
  url: string
  image: string
}
