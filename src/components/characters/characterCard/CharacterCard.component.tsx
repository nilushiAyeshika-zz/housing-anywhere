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
  const {
    className,
    name,
    profileImage,
    status,
    species,
    location,
    onClick,
    callbackValue,
  } = props

  const handleClick = useCallback(() => {
    onClick?.(callbackValue)
  }, [callbackValue, onClick])

  return (
    <CharacterCardWrapper
      className={className}
      onClick={handleClick}
    >
      <Grid className="card-img-wrapper">
        <img src={profileImage || defaultImg} alt="profile" />
        <Grid className="card-header">
          <Text color="typo-white" size="l" className="character-name">
            {name}
          </Text>
        </Grid>
      </Grid>

      <Grid className="card-details-wrapper" direction="column" padding="1.5rem">
        <Grid margin="0 0 1rem 0" alignItems="center">
            <FontAwesomeIcon
              icon={faCircle}
              className={classNames("character-status",
              { "alive": status === CharacterStatus.Alive },
              { "dead": status === CharacterStatus.Dead },
              { "unknown": status === CharacterStatus.Unknown })}
            />
            <Text color="typo-middle-light" size="m">
              {status} -
            </Text>
            <Text color="typo-middle-light" size="m">
              &nbsp;{species}
            </Text>
        </Grid>
        <Grid margin="0 0 1rem 0" direction="column">
          <Text color="typo-secondary" size="m" margin="0 0 0.5rem 0">
            Location -
          </Text>
          <Text color="typo-middle-light" size="m">
            {location}
          </Text>
        </Grid>
        <Grid margin="0 0 1rem 0" direction="column" alignItems="flex-end">
          <Text color="typo-middle-light" size="m">
            Read More...
          </Text>
        </Grid>
      </Grid>
    </CharacterCardWrapper>
  )
}

export default CharacterCard
