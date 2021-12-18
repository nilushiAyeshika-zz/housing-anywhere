import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Main from './containers/common/main/Main'

import { appTheme } from './theme/Theme'
import GlobalStyles from './theme/GlobalStyles'

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Router>
        <Main />
      </Router>
    </ThemeProvider>
  )
}

export default App
