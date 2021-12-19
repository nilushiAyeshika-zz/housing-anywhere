import React from 'react'
import ContentLoader from 'react-content-loader'

import { CharacterDetailsLoaderWrapper } from './CharacterDetailsLoader.theme'

const CharacterDetailsLoader = () => (
  <CharacterDetailsLoaderWrapper>
    <ContentLoader
      speed={2}
      width={400}
      height={600}
      viewBox="0 0 400 600"
      backgroundColor="rgb(79 81 86)"
      foregroundColor="rgb(80 81 80)"
    >
      <rect x="47" y="5" rx="2" ry="2" width="306" height="17" />
      <rect x="86" y="30" rx="2" ry="2" width="206" height="15" />
      <rect x="2" y="103" rx="2" ry="2" width="400" height="400" />
      <rect x="8" y="550" rx="0" ry="0" width="389" height="17" />
      <rect x="10" y="578" rx="0" ry="0" width="296" height="20" />
    </ContentLoader>
  </CharacterDetailsLoaderWrapper>
)

export default CharacterDetailsLoader
