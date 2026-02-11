import { useMemo } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

import { theme } from '@constants/theme';
import AppText from './AppText';

type Props = TextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
};

export default function TextField({ label, error, containerStyle, ...props }: Props) {
  const borderColor = useMemo(() => {
    if (error) return theme.colors.danger;
    return theme.colors.border;
  }, [error]);

  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && (
        <AppText variant="small" style={styles.label}>
          {label}
        </AppText>
      )}

      <TextInput
        placeholderTextColor={theme.colors.muted}
        style={[styles.input, { borderColor }]}
        {...props}
      />

      {!!error && (
        <AppText variant="small" color={theme.colors.danger} style={styles.error}>
          {error}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: theme.spacing.xs },
  label: { color: theme.colors.muted },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.card,
    color: theme.colors.text,
  },
  error: { marginTop: 2 },
});
