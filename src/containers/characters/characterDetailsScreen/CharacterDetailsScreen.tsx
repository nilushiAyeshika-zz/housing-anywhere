import { FC, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import Grid from '../../../components/layout/grid/Grid.component'
import CharactersDetailsScreenWrapper from './CharacterDetailsScreen.theme'
import { getCharacterDetails } from '../../../features/characters/CharactersAction'
import Text from '../../../components/core/text/Text.component'
import { CharacterStatus } from '../../../constants/CharacterStatus'
import Button from '../../../components/core/button/Button.component'
import CharacterDetailsLoader from '../../../components/contectLoaders/characterDetailsLoader/CharacterDetailsLoader.component'

import { appTheme } from '../../../theme/Theme'

const CharacterDetailsScreen: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { characterId } = params

  const {
    isCharacterDetailsLoading,
    characterDetails,
    characterLocationDetails,
    characterEpisodeDetails,
    isCharacterDetailsError,
  } = useSelector((state: any) => state.characters)

  const fetchCharacterDetails = () => {
    if (characterId) {
      dispatch(getCharacterDetails(parseInt(characterId)))
    }
  }

  const handleBackNavigation = useCallback(() => {
    navigate('/')
  }, [])

  const renderCharacterDetails = () => (
    <Grid
      className="profile-details"
      direction="column"
      alignItems="center"
      data-test="character-details"
    >
      <Text
        color="typo-white"
        size="xl"
        margin="0 0 4rem 0"
        textAlign="center"
        data-test="character-name"
      >
        {characterDetails.name}
      </Text>
      <img src={characterDetails.image} alt="profile" data-test="character-image" />
      <Grid
        margin="4rem 0 0 0"
        alignItems="center"
        direction="column"
        justifyContent="center"
        className="profile-inner"
      >
        <Grid margin="0 0 5rem 0" justifyContent="center" alignItems="center">
          <FontAwesomeIcon
            icon={faCircle}
            className={classNames(
              'character-status',
              { alive: characterDetails.status === CharacterStatus.Alive },
              { dead: characterDetails.status === CharacterStatus.Dead },
              { unknown: characterDetails.status === CharacterStatus.Unknown }
            )}
            data-test="character-status-icon"
          />
          <Text color="typo-middle-light" size="m" data-test="character-status">
            {characterDetails.status} -
          </Text>
          <Text color="typo-middle-light" size="m" data-test="character-species">
            &nbsp;{characterDetails.species}
          </Text>
        </Grid>
        <Grid margin="0 0 2rem 0" direction="column" data-test="character-location">
          <Text color="typo-secondary" size="m" margin="0 0 0.5rem 0">
            Location -
          </Text>
          <Text color="typo-middle-light" size="m">
            {characterDetails.location.name}
          </Text>
        </Grid>
        <Grid margin="0 0 2rem 0" direction="column" data-test="character-origin">
          <Text color="typo-secondary" size="m" margin="0 0 0.5rem 0">
            Origin -
          </Text>
          <Text color="typo-middle-light" size="m">
            {characterDetails.origin.name}
          </Text>
        </Grid>
        <Grid margin="0 0 2rem 0" direction="column" data-test="character-dimension">
          <Text color="typo-secondary" size="m" margin="0 0 0.5rem 0">
            Dimension -
          </Text>
          <Text color="typo-middle-light" size="m">
            {characterLocationDetails.dimension}
          </Text>
        </Grid>
        <Grid margin="0 0 2rem 0" direction="column" data-test="character-residents-count">
          <Text color="typo-secondary" size="m" margin="0 0 0.5rem 0">
            Amount of residence -
          </Text>
          <Text color="typo-middle-light" size="m">
            {characterLocationDetails.residents?.length}
          </Text>
        </Grid>
        <Grid margin="0 0 2rem 0" direction="column" data-test="character-type">
          <Text color="typo-secondary" size="m" margin="0 0 0.5rem 0">
            Type -
          </Text>
          <Text color="typo-middle-light" size="m">
            {characterLocationDetails.type}
          </Text>
        </Grid>
        {characterEpisodeDetails?.length > 0 && (
          <Grid margin="0 0 2rem 0" direction="column">
            <Text
              color="typo-secondary"
              size="m"
              margin="0 0 0.5rem 0"
              data-test="character-chapter-name-item"
            >
              Name of the chapters -
            </Text>
            <ul className="chapter-list">
              {characterEpisodeDetails?.map((item: any) => (
                <li key={item.id}>
                  <Text color="typo-middle-light" size="m">
                    {item.name}
                  </Text>
                </li>
              ))}
            </ul>
          </Grid>
        )}
      </Grid>
    </Grid>
  )

  const renderLoading = () => (
    <Grid className="loading-wrapper" justifyContent="center" alignItems="center">
      <CharacterDetailsLoader />
    </Grid>
  )

  const renderNoResults = () => (
    <Text color="typo-white" size="xl" margin="0 0 4rem 0" data-test="no-character-found">
      Sorry, Character not found
    </Text>
  )

  const renderBodyData = () => {
    if (isCharacterDetailsLoading) {
      return renderLoading()
    } else if (!isCharacterDetailsLoading && characterDetails) {
      return renderCharacterDetails()
    } else if (
      (!isCharacterDetailsLoading && !!characterDetails) ||
      (!isCharacterDetailsLoading && isCharacterDetailsError)
    ) {
      return renderNoResults()
    }
  }

  useEffect(() => {
    fetchCharacterDetails()
  }, [])

  return (
    <CharactersDetailsScreenWrapper data-test="character-details-wrapper">
      <Grid justifyContent="center" backgroundColor={appTheme.colors.PRIMARY_BG}>
        <Grid direction="column">
          <Button
            onClick={handleBackNavigation}
            width="15rem"
            margin="0 0 2rem 0"
            className="back-button"
            data-test="character-details-back-button"
            startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
          >
            <Text size="m" color="typo-white">
              Back to home
            </Text>
          </Button>
          {renderBodyData()}
        </Grid>
      </Grid>
    </CharactersDetailsScreenWrapper>
  )
}

export default CharacterDetailsScreen
