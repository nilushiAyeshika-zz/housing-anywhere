import ContentLoader from 'react-content-loader'

import { CharacterCardLoaderWrapper } from './CharacterCardLoader.theme'

const CharacterCardContentLoader = () => (
  <CharacterCardLoaderWrapper>
    <ContentLoader
      speed={2}
      width={350}
      height={460}
      viewBox="0 0 350 460"
      backgroundColor="#3b697e"
      foregroundColor="#285b72"
    >
      <rect x="9" y="17" rx="9" ry="9" width="331" height="266" />
      <rect x="8" y="299" rx="10" ry="10" width="135" height="11" />
      <rect x="8" y="319" rx="10" ry="10" width="180" height="10" />
      <rect x="9" y="339" rx="10" ry="10" width="96" height="10" />
    </ContentLoader>
  </CharacterCardLoaderWrapper>
)

export default CharacterCardContentLoader
