/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';


export const Colors = {
  white0: '#FFFFFF',
  white1: '#FBF7ED',
  gray0: '#F0EFEC',
  green0: '#F1FCFA',
  green1: '#B8F2E1',
  blue0: '#6495ED',
  blue1: '#0047ab',
  red0: '#FFEDE8',
  black0: '#222222', 
  light: {
    secondary: '#0047AB',
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    border: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
