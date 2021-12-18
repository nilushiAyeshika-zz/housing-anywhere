import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

const CharacterCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border: 1px solid ${appTheme.colors.TYPOGRAPHY_MIDDLE_LIGHT};
  width: 39rem;
  border-radius: 1rem;

  .card-img-wrapper {
    position: relative;
    width: 100%;
    height: 30rem;

      &::before {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: ${appTheme.colors.DEFAULT_TRANSPARENT_BG};
        z-index: 4;
        height: 100%;
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        object-fit: contain;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      .card-header {
        position: absolute;
        z-index: 5;
        left: 1rem;
        bottom: 1rem;
      }
    }

    .card-details-wrapper {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    &:hover {
      cursor: pointer;
    }

    .character-name {
      display: block;
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

    .simple-icon {
      font-size: 1rem;
      color: ${appTheme.colors.TYPOGRAPHY_MIDDLE_LIGHT};
      margin-right: 0.5rem;

      &.icon-medium {
        font-size: 1.2rem;
      }
    }
    
    .tool-tip {
      max-width: 20.5rem;
    }

    @media(max-width: 398px) {
      width: 100%;

      .card-img-wrapper {
        width: 100%;
      }
    }
  }
`

export default CharacterCardWrapper
