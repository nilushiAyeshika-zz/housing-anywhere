import styled from 'styled-components'

const CharactersViewWrap = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 120.5rem;

  .character-card {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

    .infinite-scroll-component__outerdiv {
      width: 100%;
    }

    .normal {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      height: 601px;

      &.single {
        & > div {
          width: 100%;
        }
      }
    }

    .multiple {
      & > div {
        display: flex;
      flex-direction: column;
      width: 50%;
      height: 50%;
      }
    }

    .infinite-scroll-component {
      display: flex;
      flex-wrap: wrap;
      overflow-x: hidden !important;
    }

    @media(max-width: 1258px) {
      width: 80.5rem;

      .character-card {
        &:nth-child(3n) {
          margin-right: 1.5rem;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }

    @media(max-width: 1090px) {
      width: 40rem;

      .character-card {
        margin-right: 0;

        &:nth-child(3n) {
          margin-right: 0;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }

    @media(max-width: 724px) {
      width: 100%;
      justify-content: center;
      padding: 0 2rem;

      .infinite-scroll-component {
        justify-content: center;
      }
    }
  }
`

export default CharactersViewWrap
