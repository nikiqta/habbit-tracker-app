import { PropsWithChildren } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { theme } from '@constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = PropsWithChildren<{
  style?: ViewStyle;
}>;

export default function Screen({ children, style }: Props) {
  return <SafeAreaView style={[styles.root, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.lg,
  },
});
