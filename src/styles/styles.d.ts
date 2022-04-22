/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import theme from './themes/dark'

export type Theme = typeof theme
declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends Theme {}
}
