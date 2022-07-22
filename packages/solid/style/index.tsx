import type { DefaultTheme } from 'solid-styled-components'

import { MediaBreakpoints } from './media'

export * from './global'
export * from './media'
export const theme: DefaultTheme = {
  colors: {
    primary: 'rgb(255, 250, 230)',
    text: 'rgba(0, 0, 0, 0.75)',

    sasa: '#74a991',
    sasadark: '#5e8f7c',
    sasalight: '#b2d5c2',
    yomogi: '#a3c8b7',
    yomogidark: '#8cbfaa',
    yomogilight: '#d1e9d9',
    dango: '#f2f7f5',
    dangodark: '#d9e9e5',
    dangolight: '#f9f9f9',
  },
  media: {
    breakpoints: {
      md: `@media ${MediaBreakpoints.md}`,
      lg: `@media ${MediaBreakpoints.lg}`,
      xl: `@media ${MediaBreakpoints.xl}`,
    },
  },
}

declare module 'solid-styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      text: string

      sasa: string
      sasadark: string
      sasalight: string

      yomogi: string
      yomogidark: string
      yomogilight: string

      dango: string
      dangodark: string
      dangolight: string
    }
    media: {
      breakpoints: {
        md: string
        lg: string
        xl: string
      }
    }
  }
}
