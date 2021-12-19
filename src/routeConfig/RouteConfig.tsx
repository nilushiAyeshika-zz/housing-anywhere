import { Routes, Route } from 'react-router-dom'

import CharactersListScreen from '../containers/characters/charactersListScreen/CharactersListScreen'
import CharacterDetailsScreen from '../containers/characters/characterDetailsScreen/CharacterDetailsScreen'
import RouteHelper from '../helpers/RouteHelper'

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersListScreen />} />
      <Route
        path={`${RouteHelper.CHARACTER_DESCRIPTION_PATH}/:characterId`}
        element={<CharacterDetailsScreen />}
      />
    </Routes>
  )
}

export default RouteConfig
