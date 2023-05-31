import {createTheme} from "@nextui-org/react";

export const theme = createTheme({
  type: 'light',
  theme: {
    fonts: {sans: 'Alegreya, serif'},
    colors: {
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#759883',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
    }
  }
})
