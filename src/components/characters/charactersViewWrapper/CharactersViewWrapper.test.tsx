import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import CharactersViewWrapper from './CharactersViewWrapper.component'
import { findByTestAttr } from '../../../utils/Test.utils'
import { appTheme } from '../../../theme/Theme'

const mockStore = configureMockStore([thunk])

const characterDetailsObj = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
}

const characterEpisodeDetailsArray = [
  {
    id: 1,
    name: 'Pilot',
  },
  {
    id: 2,
    name: 'Lawnmower Dog',
  },
]

const characterLocationDetailsObj = {
  id: 3,
  name: 'Citadel of Ricks',
  type: 'Space station',
  dimension: 'unknown',
  residents: ['https://rickandmortyapi.com/api/character/8'],
}

const characterListArray = [characterDetailsObj]
const defaultProps = {}

const defaultStoreState = {
  characters: {
    characterList: [],
    isLoading: false,
    nextPageToken: '',
    total: 0,
    characterDetails: null,
    characterLocationDetails: null,
    characterEpisodeDetails: null,
    isCharacterDetailsLoading: false,
    isCharacterDetailsError: false,
  },
}

const customDataStoreState = {
  ...defaultStoreState,
  characters: {
    ...defaultStoreState.characters,
    characterList: characterListArray,
    total: 1,
    characterDetails: characterDetailsObj,
    characterLocationDetails: characterLocationDetailsObj,
    characterEpisodeDetails: characterEpisodeDetailsArray,
  },
}

const setup = (props: any, defaultStore = {}) => {
  const setupProps = { ...props }
  const store = mockStore(defaultStore)
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <CharactersViewWrapper {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<CharactersViewWrapper />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup(defaultProps, defaultStoreState)
  })
  test('test character view wrapper', () => {
    const component = findByTestAttr(wrapper, 'characters-view-wrap')
    expect(component.exists()).toBe(true)
  })

  test('test character no data message', () => {
    const component = findByTestAttr(wrapper, 'character-no-data-massage')
    expect(component.exists()).toBe(true)
  })

  describe('for character data available', () => {
    beforeEach(() => {
      wrapper = setup(defaultProps, customDataStoreState)
    })
    afterAll(() => {
      wrapper.unmount()
    })

    test('test character infinite wrapper initial load', () => {
      const component = findByTestAttr(wrapper, 'infinite-wrapper')
      expect(component.exists()).toBe(true)
    })
    test('test character details card', () => {
      const component = findByTestAttr(wrapper, 'character-card')
      expect(component.exists()).toBe(true)
    })
    test('test character no data message not shown', () => {
      const component = findByTestAttr(wrapper, 'character-no-data-massage')
      expect(component.exists()).toBe(false)
    })
  })
})
