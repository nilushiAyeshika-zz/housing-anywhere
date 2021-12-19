import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import CharacterCard from './CharacterCard.component'
import { findByTestAttr } from '../../../utils/Test.utils'
import { appTheme } from '../../../theme/Theme'
import { store } from '../../../store'

const className = 'className'
const name = 'Jest'
const profileImage = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
const status = 'active'
const species = 'Space station'
const onClick = jest.fn()
const callbackValue = jest.fn()
const location = 'Citadel of Ricks'

const defaultProps = {
  className,
  name,
  profileImage,
  status,
  species,
  location,
  onClick,
  callbackValue,
}
const setup = (props: any) => {
  const setupProps  = { ...props }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <CharacterCard {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<CharacterCard />', () => {

  const wrapper = setup(defaultProps)

  test('test character card wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'character-card-wrapper')
    expect(component.exists()).toBe(true)
  })
  test('test character card wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'character-card-wrapper')
    expect(component.exists()).toBe(true)
  })
  test('test character image', () => {
    const component = findByTestAttr(wrapper, 'character-image')
    expect(component.exists()).toBe(true)
  })
  test('test character name', () => {
    const component = findByTestAttr(wrapper, 'character-name')
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
  test('test character species', () => {
    const component = findByTestAttr(wrapper, 'character-species')
    expect(component.exists()).toBe(true)
  })
  test('test character location', () => {
    const component = findByTestAttr(wrapper, 'character-location')
    expect(component.exists()).toBe(true)
  })
  test('test character read more option', () => {
    const component = findByTestAttr(wrapper, 'character-read-more-option')
    expect(component.exists()).toBe(true)
  })
})
