import { StyleSheet } from 'react-native';

import { colors, fonts } from '@styles';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 334 / 60,
    paddingLeft: 25,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 25,
    color: colors.texts.black,
    fontFamily: fonts.description.family,
    fontSize: fonts.description.size,
    backgroundColor: 'transparent',
  },
});

export default styles;
