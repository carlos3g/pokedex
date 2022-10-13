import React, { FC, useReducer } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { colors } from '@styles';
import styles from './styles';

interface InputProps extends TextInputProps {
  leftComponent?: () => JSX.Element;
}

const Input: FC<InputProps> = React.memo(({ leftComponent, ...rest }) => {
  const [focused, toggleFocused] = useReducer((value: boolean) => !value, false);
  const inputDynamicStyle = { paddingLeft: leftComponent ? 10 : 0 };
  const wrapperDynamicStyle = {
    backgroundColor: focused ? colors.backgrounds.pressedInput : colors.backgrounds.defaultInput,
  };

  return (
    <View style={[styles.wrapper, wrapperDynamicStyle]}>
      {leftComponent ? leftComponent() : null}

      <TextInput
        style={[styles.textInput, inputDynamicStyle]}
        onFocus={toggleFocused}
        onBlur={toggleFocused}
        underlineColorAndroid="#00000000"
        selectionColor={colors.pokemonTypes.psychic.primary}
        placeholderTextColor={colors.texts.gray}
        {...rest}
      />
    </View>
  );
});

export { Input };
