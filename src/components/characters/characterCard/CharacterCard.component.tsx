import { FC, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import { CharacterCardProps } from './CharacterCard.types'
import Grid from '../../layout/grid/Grid.component'
import Text from '../../core/text/Text.component'
import defaultImg from '../../../assets/img/default.png'
import { CharacterStatus } from '../../../constants/CharacterStatus'

import CharacterCardWrapper from './CharacterCard.theme'

const CharacterCard: FC<CharacterCardProps> = (props) => {
  const { className, name, profileImage, status, species, location, onClick, callbackValue } = props

  const handleClick = useCallback(() => {
    onClick?.(callbackValue)
  }, [callbackValue, onClick])

  return (
    <CharacterCardWrapper
      className={className}
      onClick={handleClick}
      data-test="character-card-wrapper"
    >
      <Grid className="card-img-wrapper" data-test="character-image">
        <img src={profileImage || defaultImg} alt="profile" />
        <Grid className="card-header">
          <Text color="typo-white" size="l" className="character-name" data-test="character-name">
            {name}
          </Text>
        </Grid>
      </Grid>

      <Grid className="card-details-wrapper" direction="column" padding="1.5rem">
        <Grid margin="0 0 1rem 0" alignItems="center">
          <FontAwesomeIcon
            icon={faCircle}
            className={classNames(
              'character-status',
              { alive: status === CharacterStatus.Alive },
              { dead: status === CharacterStatus.Dead },
              { unknown: status === CharacterStatus.Unknown }
            )}
            data-test="character-status-icon"
          />
          <Text color="typo-middle-light" size="m" data-test="character-status">
            {status} -
          </Text>
          <Text color="typo-middle-light" size="m" data-test="character-species">
            &nbsp;{species}
          </Text>
        </Grid>
        <Grid margin="0 0 1rem 0" direction="column" data-test="character-location">
          <Text color="typo-secondary" size="m" margin="0 0 0.5rem 0">
            Location -
          </Text>
          <Text color="typo-middle-light" size="m">
            {location}
          </Text>
        </Grid>
        <Grid
          margin="0 0 1rem 0"
          direction="column"
          alignItems="flex-end"
          data-test="character-read-more-option"
        >
          <Text color="typo-middle-light" size="m">
            Read More...
          </Text>
        </Grid>
      </Grid>
    </CharacterCardWrapper>
  )
}

export default CharacterCard
