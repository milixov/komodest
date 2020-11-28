import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Sen-Regular',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Sen-Bold',
      fontWeight: 'bold',
    },
    extraBold: {
      fontFamily: 'Sen-ExtraBold',
      fontWeight: 900,
    },
  },
};

export default {
    ...DefaultTheme,
    roundness: 4,
    fonts: configureFonts(fontConfig),
    colors: {
      ...DefaultTheme.colors,
      primary: '#F4F6FC',
      accent: '#F1E7E7',
      background: '#F4F6FC',
      surface: '#F4F6FC',
      text: '#1A0101',
      backdrop: '#F4F6FC'
    },
  };