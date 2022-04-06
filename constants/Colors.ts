import { text } from "stream/consumers";

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';


export const DefaultColor = {
  main: '#6495ED',
  secondary: '#5A5B9F',
  white: '#fff',
  black: '#000',
  dark: '#707070',
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
export const commonColor = {
  main: 'green',
  secondary: 'white',
  white: 'white',
};
