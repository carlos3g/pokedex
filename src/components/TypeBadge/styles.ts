import { StyleSheet } from 'react-native';

import { colors, fonts } from '@styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.pokemonTypes.grass.primary,
    padding: 5,
    borderRadius: 3,
  },
  text: {
    fontFamily: fonts.pokemonType.family,
    fontSize: fonts.pokemonType.size,
    color: colors.texts.white,
    marginLeft: 5,
  },
});

export default styles;
