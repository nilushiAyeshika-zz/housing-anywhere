import { FC } from 'react'

import RouteConfig from '../../../routeConfig/RouteConfig'

import MainStyles from './Main.theme'

const Main: FC = () => {
  return (
    <MainStyles className="main-wrapper" data-test="main-container">
      <RouteConfig data-test="route-config-component" />
    </MainStyles>
  )
}

export default Main
