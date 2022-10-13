import { StyleSheet } from 'react-native';

import { colors, fonts } from '@styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.pokemonTypes.grass.background,
    padding: 20,
    borderRadius: 10,
    aspectRatio: 2.9,
    elevation: 2,
  },
  details: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  pokemonNumber: {
    fontFamily: fonts.pokemonNumber.family,
    fontSize: fonts.pokemonNumber.size,
    color: colors.texts.number,
  },
  name: {
    fontFamily: fonts.pokemonName.family,
    fontSize: fonts.pokemonName.size,
    color: colors.texts.white,
    textTransform: 'capitalize',
  },
  badges: {
    flexDirection: 'row',
    marginTop: 5,
  },
  sprite: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  spaceRight: {
    marginRight: 5,
  },
  patternGrid6x3: {
    position: 'absolute',
    top: 10,
    left: '25%',
    zIndex: -1,
  },
  patternPokeball: {
    position: 'absolute',
    right: '-5%',
    zIndex: -1,
  },
});

export default styles;
