import { Dimensions, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { colors, fonts } from '@styles';

const { statusBarHeight } = Constants;
const { width: wWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgrounds.white,
    paddingHorizontal: 40,
    paddingTop: statusBarHeight,
  },
  title: {
    fontFamily: fonts.applicationTitle.family,
    fontSize: fonts.applicationTitle.size,
    color: colors.texts.black,
    marginBottom: 10,
  },
  description: {
    fontFamily: fonts.description.family,
    fontSize: fonts.description.size,
    color: colors.texts.gray,
    marginBottom: 25,
  },
  flashListContent: {
    paddingTop: 45,
  },
  separator: {
    height: 30,
  },
  patternPokeball: {
    position: 'absolute',
    top: 0,
    transform: [{ translateY: -(wWidth / 2) }],
    zIndex: -1,
  },
});

export default styles;
