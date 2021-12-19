import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import CharacterDetailsScreen from './CharacterDetailsScreen'
import { findByTestAttr } from '../../../utils/Test.utils'
import { appTheme } from '../../../theme/Theme'

const mockStore = configureMockStore([thunk])

const characterDetailsObj = 
  {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
      ]
  }

const characterEpisodeDetailsArray = [
  {
    "id": 1,
    "name": "Pilot"
  },
  {
    "id": 2,
    "name": "Lawnmower Dog"
  }
]

const characterLocationDetailsObj = {
  "id": 3,
  "name": "Citadel of Ricks",
  "type": "Space station",
  "dimension": "unknown",
  "residents": [
    "https://rickandmortyapi.com/api/character/8",
  ]
}
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
     characterDetails: characterDetailsObj,
     characterLocationDetails: characterLocationDetailsObj,
     characterEpisodeDetails:characterEpisodeDetailsArray
    },
}

const setup = (props: any, defaultStore = {}) => {
  const setupProps = { ...props }
  const store = mockStore(defaultStore)
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <CharacterDetailsScreen {...setupProps}/>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<CharacterDetailsScreen />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup(defaultProps, customDataStoreState)
  })

  test('test character details wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'character-details-wrapper')
    expect(component.exists()).toBe(true)
  })
  test('test character details back button', () => {
    const component = findByTestAttr(wrapper, 'character-details-back-button')
    expect(component.exists()).toBe(true)
  })

  describe('for profile data not available', () => {
    test('test no character found message', () => {
      const component = findByTestAttr(wrapper, 'no-character-found')
      expect(component.exists()).toBe(false)
    })
  })
  
  describe('for profile data available', () => {
    beforeEach(() => {
      wrapper = setup(defaultProps, customDataStoreState)
    })
    afterAll(() => {
      wrapper.unmount()
    })
    test('test character details card', () => {
      const component = findByTestAttr(wrapper, 'character-details')
      expect(component.exists()).toBe(true)
    })
    test('test character name', () => {
      const component = findByTestAttr(wrapper, 'character-name')
      expect(component.exists()).toBe(true)
    })
    test('test character image', () => {
      const component = findByTestAttr(wrapper, 'character-image')
      expect(component.exists()).toBe(true)
    })
    test('test character status icon', () => {
      const component = findByTestAttr(wrapper, 'character-status-icon')
      expect(component.exists()).toBe(true)
    })
    test('test character status', () => {
      const component = findByTestAttr(wrapper, 'character-status')
      expect(component.exists()).toBe(true)
    })
    test('test character origin', () => {
      const component = findByTestAttr(wrapper, 'character-origin')
      expect(component.exists()).toBe(true)
    })
    test('test character species', () => {
      const component = findByTestAttr(wrapper, 'character-species')
      expect(component.exists()).toBe(true)
    })
    test('test character location', () => {
      const component = findByTestAttr(wrapper, 'character-location')
      expect(component.exists()).toBe(true)
    })
    test('test character dimension', () => {
      const component = findByTestAttr(wrapper, 'character-dimension')
      expect(component.exists()).toBe(true)
    })  
    test('test character residents count', () => {
      const component = findByTestAttr(wrapper, 'character-residents-count')
      expect(component.exists()).toBe(true)
    })  
    test('test character type', () => {
      const component = findByTestAttr(wrapper, 'character-type')
      expect(component.exists()).toBe(true)
    })  
    test('test character chapter name item', () => {
      const component = findByTestAttr(wrapper, 'character-chapter-name-item')
      expect(component.exists()).toBe(true)
    })    
  })
})
