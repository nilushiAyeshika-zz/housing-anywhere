import { FC } from 'react'

import CharactersViewWrapper from '../../../components/characters/charactersViewWrapper/CharactersViewWrapper.component'
import Grid from '../../../components/layout/grid/Grid.component'

import { appTheme } from '../../../theme/Theme'

const CharacterListScreen: FC = () => {
  return (
    <Grid
      justifyContent="center"
      backgroundColor={appTheme.colors.PRIMARY_BG}
      minHeight="100vh"
      padding="0 2rem"
    >
      <CharactersViewWrapper data-test="characters-view-wrapper"/>
    </Grid>
  )
}

export default CharacterListScreen
