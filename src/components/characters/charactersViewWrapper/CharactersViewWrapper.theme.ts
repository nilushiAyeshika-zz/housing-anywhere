import styled from 'styled-components'

const CharactersViewWrap = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 121.5rem;

  .character-card {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
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
    }

    @media(max-width: 1090px) {
      width: 62rem;
    }

    @media(max-width: 724px) {
      width: 100%;
      justify-content: center;
      padding: 0 2rem;

      .infinite-scroll-component {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }
    }
  }
`

export default CharactersViewWrap
