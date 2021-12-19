import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import CharacterListScreen from './CharactersListScreen'
import { findByTestAttr } from '../../../utils/Test.utils'
import { appTheme } from '../../../theme/Theme'
import { store } from '../../../store'

const setup = () => {
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <CharacterListScreen />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<CharacterListScreen />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup()
  })

  test('test characters view wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'characters-view-wrapper')
    expect(component.exists()).toBe(true)
  })
})
