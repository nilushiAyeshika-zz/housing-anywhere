import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

const CharactersDetailsScreenWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem 2.5rem;
  width: 100%;
  min-height: 100vh;

  .profile-details {
    img {
      max-width: 30rem;
    }
  }

  .profile-inner {
    width: 40rem;
  }

  .back-button {
    svg {
      color: ${appTheme.colors.TYPOGRAPHY_LIGHT};
    }
  }

  .character-status {
    font-size: 1rem;
    margin-right: 0.5rem;

    &.alive {
      color:  ${appTheme.colors.TYPOGRAPHY_ALIVE};
    }

    &.dead {
      color:  ${appTheme.colors.TYPOGRAPHY_DEAD};
    }

    &.unknown {
      color:  ${appTheme.colors.TYPOGRAPHY_UNKNOWN};
    }
  }

  .chapter-list {
    color: ${appTheme.colors.TYPOGRAPHY_LIGHT};
    padding-left: 2rem;
  }
`

export default CharactersDetailsScreenWrapper
