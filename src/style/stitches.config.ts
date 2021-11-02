import {createStitches} from '@stitches/react'

export const {createTheme, styled, getCssText, globalCss} = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      accentColor: 'red',
      primary: 'rgba(17, 24, 39, 1)',
      secondary: 'white',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
    sizes: {
      large: '896px',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    dark: '(prefers-color-scheme: dark)',
  },
})

export const darkTheme = createTheme({
  colors: {
    primary: 'white',
    secondary: 'rgba(17, 24, 39, 1)',

    gray100: 'hsl(206,8%,12%)',
    gray200: 'hsl(206,7%,14%)',
    gray300: 'hsl(206,7%,15%)',
    gray400: 'hsl(206,7%,24%)',
    gray500: 'hsl(206,7%,30%)',
    gray600: 'hsl(206,5%,53%)',
  },
  space: {},
  fonts: {},
})

/* eslint-disable */
export const globalStyles = globalCss({
  '@dark': {
    // notice the `media` definition on the stitches.config.ts file
    ':root:not(.light)': {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        // @ts-expect-error suppress any rule
        const currentColor = darkTheme.colors[currentColorKey]
        const currentColorValue =
          currentColor.value.substring(0, 1) === '$' ? `$colors${currentColor.value}` : currentColor.value

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        }
      }, {}),
    },
  },
})

globalStyles()
