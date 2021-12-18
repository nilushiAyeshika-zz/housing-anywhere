import axios from 'axios'

import ApiHelper from '../helpers/ApiHelper'
import { IConfig } from './Api.types'

class CharactersApi {
  /**
   * get Characters
   * @param page
   */
  getCharacters = async (page = 1) => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: `${process.env.REACT_APP_CHARACTERS_SERVICES}/character/`,
      method: 'get',
      params: { page },
    }

    return axios.request(config as IConfig)
  }

  getCharacterDetails = async (id: number) => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: `${process.env.REACT_APP_CHARACTERS_SERVICES}/character/${id}`,
      method: 'get',
    }

    return axios.request(config as IConfig)
  }

  getCharacterLocationDetails = async (url: string) => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: url,
      method: 'get',
    }

    return axios.request(config as IConfig)
  }

  getMultipleEpisodeDetails = async (episodes: number[]) => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: `${process.env.REACT_APP_CHARACTERS_SERVICES}/episode/${episodes}`,
      method: 'get',
    }

    return axios.request(config as IConfig)
  }
}

export default new CharactersApi()
