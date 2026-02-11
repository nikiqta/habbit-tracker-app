import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { theme } from '@constants/theme';

type Variant = 'h1' | 'h2' | 'body' | 'small';

type Props = PropsWithChildren<{
  variant?: Variant;
  style?: StyleProp<TextStyle>;
  color?: string;
  numberOfLines?: number;
}>;

export default function AppText({
  children,
  variant = 'body',
  style,
  color,
  numberOfLines,
}: Props) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.base,
        theme.text[variant],
        { color: color ?? theme.colors.text },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
