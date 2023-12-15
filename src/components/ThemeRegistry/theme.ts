import { Open_Sans, Roboto, Ubuntu } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#fff'
    },
    secondary: {
      main: 'hsla(0,0%,100%,.6)'
    }
  },
  typography: {
    fontFamily: ubuntu.style.fontFamily,
    subtitle1: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 40,
      fontWeight: 500,
      color: '#fff',
      textAlign: 'center',
      cursor: 'default',
      letterSpacing: '-0.03em',
      lineHeight: 1.25
    },
    subtitle2: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 20,
      fontWeight: 500,
      color: '#fff',
      cursor: 'pointer',
    },
    body1: {
      fontSize: 24,
      fontFamily: openSans.style.fontFamily,
      fontWeight: 400,
      color: 'hsla(0,0%,100%,.6)',
      cursor: 'default',
      textAlign: 'center'
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      color: 'hsla(0,0%,100%,.6)',
      cursor: 'default',
      fontFamily: openSans.style.fontFamily
    },
    button: {
      fontFamily: openSans.style.fontFamily,
      textTransform: 'full-size-kana',
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      p: '1rem 1.5rem',
      background: '#FF5C00',
      color: '#000',
      '&:hover': {
        background: '#fff'
      }
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;