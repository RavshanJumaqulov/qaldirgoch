import { Open_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const openSans = Open_Sans({
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
    },
    active: {
      main: '#FF5C00'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1200,
      desktop: 1600,
    },
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
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
      cursor: 'default',
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

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  interface Palette {
    active: Palette["primary"];
  }
  interface PaletteOptions {
    active?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

export default theme;