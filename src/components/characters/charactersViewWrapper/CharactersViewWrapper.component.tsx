import { FC, useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CharacterCard from '../characterCard/CharacterCard.component'
import CharacterCardContentLoader from '../../contectLoaders/characterCardLoader/CharacterCardLoader.component'
import { ICharactersView } from './CharactersViewWrapper.types'
import { getCharacters } from '../../../features/characters/CharactersAction'
import Text from '../../core/text/Text.component'
import { ICharacter } from '../../../containers/characters/Characters.types'

import CharactersViewWrap from './CharactersViewWrapper.theme'

const CharactersViewWrapper: FC<ICharactersView> = (props) => {
  const { className, placeholderCount } = props

  const placeholderItemsCount = placeholderCount || 6
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { characterList, isLoading, total } = useSelector((state: any) => state.characters)

  const [pageNumber, setPageNumber] = useState<number>(1)

  /**
   * fetch characters
   * @param page
   */
  const fetchCharacters = (page: number) => {
    dispatch(getCharacters(page))
  }

  /**
   * handle infinite load more
   */
  const handleNextPageRequest = useCallback(() => {
    setPageNumber(pageNumber + 1)
    fetchCharacters(pageNumber + 1)
  }, [pageNumber])

  const handleCharacterDetails = useCallback((value) => {
    navigate(`character/${value}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    fetchCharacters(pageNumber)
  }, [])

  const renderInfiniteWrapper = () => (
    <InfiniteScroll
      dataLength={characterList?.length}
      next={handleNextPageRequest}
      hasMore={characterList?.length < total}
      loader={renderLoadingView()}
      refreshFunction={() => null}
      pullDownToRefreshThreshold={50}
    >
      {characterList?.map((character: ICharacter) => (
        <CharacterCard
          className="character-card"
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          profileImage={character.image}
          location={character.location?.name}
          origin={character.origin?.name}
          callbackValue={character.id}
          onClick={handleCharacterDetails}
        />
      ))}
    </InfiniteScroll>
  )

  const renderLoadingView = () => {
    return Array.from(Array(placeholderItemsCount).keys()).map((index) => (
      <CharacterCardContentLoader key={index} />
    ))
  }

  return (
    <CharactersViewWrap className={className}>
      {characterList?.length > 0 && renderInfiniteWrapper()}
      {characterList?.length === 0 && !isLoading && (
        <Text color="typo-middle-light" size="l">
          Sorry, No data to display!
        </Text>
      )}
      {isLoading && renderLoadingView()}
    </CharactersViewWrap>
  )
}

export default CharactersViewWrapper
