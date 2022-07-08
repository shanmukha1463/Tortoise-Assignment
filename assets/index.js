import {Dimensions} from 'react-native';

//icons
const charger = require('./icons/charger.png');
const gift = require('./icons/gift.png');
const mute = require('./icons/mute.png');
const my = require('./icons/my.png');
const sound = require('./icons/sound.png');
const tortoise = require('./icons/tortoise.png');
const truck = require('./icons/truck.png');
// Backgrounds
const background1 = require('./images/background1.png');
const background2 = require('./images/background2.png');

const IMAGES = {
  charger,
  gift,
  mute,
  my,
  sound,
  tortoise,
  truck,
  background1,
  background2,
};

// THEME
const COLORS = {
  primary: '#438F34',
  secondary: '#6F767E',
  black: '#11172D',
  white: '#FFFFFF',
  lightGray: '#727272',
  lightGray2: '#E2E2E2',
};

const FONTS = {
  heading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 30,
  },
  subHeading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    lineHeight: 22,
  },
};

const {height, width} = Dimensions.get('window');
const SIZES = {
  height,
  width,
};
export {IMAGES, FONTS, COLORS, SIZES};
