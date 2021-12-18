import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Grid from '../../../components/layout/grid/Grid.component'
import CharactersDetailsScreenWrapper from './characterDetailsScreen.theme'
import { getCharacterDetails } from '../../../features/characters/CharactersAction'
import defaultImg from '../../../assets/img/default.png'
import Text from '../../../components/core/text/Text.component'

import { appTheme } from '../../../theme/Theme'

const CharacterDetailsScreen: FC = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const { characterId } = params

  const { isCharacterDetailsLoading, characterDetails, characterLocationDetails } = useSelector((state: any) => state.characters)

  console.log(characterDetails)
  console.log(characterLocationDetails)
  

  const fetchCharacterDetails = () => {
    if (characterId) {
      dispatch(getCharacterDetails(parseInt(characterId)))
    }
  }

  useEffect(() => {
    fetchCharacterDetails()
  }, [])

  return (
    <CharactersDetailsScreenWrapper>
      <Grid
        justifyContent="center"
        backgroundColor={appTheme.colors.PRIMARY_BG}
        minHeight="100vh"
      >
        <Grid className="card-img-wrapper">
          <img src={characterDetails?.image || defaultImg} alt="profile" />
          <Grid>
            {/* <Text color="typo-white" size="l" className="character-name">
              {name}
            </Text> */}
          </Grid>
        </Grid>
      </Grid>
    </CharactersDetailsScreenWrapper>
  )
}

export default CharacterDetailsScreen
