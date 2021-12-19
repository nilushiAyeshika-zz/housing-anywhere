import React from 'react'
import ContentLoader from 'react-content-loader'

import { CharacterDetailsLoaderWrapper } from './CharacterDetailsLoader.theme'

const CharacterDetailsLoader = () => (
  <CharacterDetailsLoaderWrapper>
    <ContentLoader
      speed={2}
      width={540}
      height={700}
      viewBox="0 0 540 700"
      backgroundColor="#3b697e"
      foregroundColor="#285b72"
    >
      <rect x="70" y="5" rx="10" ry="10" width="396" height="50" />
      <rect x="2" y="103" rx="10" ry="10" width="530" height="400" />
      <rect x="120" y="550" rx="10" ry="10" width="290" height="17" />
      <rect x="8" y="600" rx="10" ry="10" width="190" height="17" />
      <rect x="8" y="640" rx="10" ry="10" width="300" height="17" />
    </ContentLoader>
  </CharacterDetailsLoaderWrapper>
)

export default CharacterDetailsLoader
