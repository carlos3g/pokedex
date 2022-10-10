declare module '*.svg' {
  import React from 'react';
  import { TextStyle, StyleProp } from 'react-native';
  import { SvgProps } from 'react-native-svg';

  interface CustomSvgProps extends SvgProps {
    style?: StyleProp<TextStyle> | undefined;
  }

  const content: React.FC<CustomSvgProps>;
  export default content;
}
