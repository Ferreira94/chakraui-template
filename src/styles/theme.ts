import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    lg: '62.5rem',
    md: '52.5rem',
    ml: '31.25rem',
  },

  colors: {
    primary: {
      '100': '#FFFFFF',
      '200': '#F8F8F8',
      '300': '#EDEDED',
      '400': '#E6E6E6',
      '500': '#E0DFDF',
      '800': '#373434',
      '900': '#000000',
    },

    red: {
      '500': '#BB4949',
    },
    yellow: {
      '300': '#E3E627',
    },
  },
  fonts: {
    heading: 'Nanum Gothic',
    body: 'Quicksand',
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'lg',
        fontWeight: '700',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'pGray.100',
        color: 'pGray.800',
      },
    },
  },
});
