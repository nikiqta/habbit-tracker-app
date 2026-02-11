import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { theme } from '@constants/theme';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  style?: ViewStyle;
};

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled,
  style,
}: Props) {
  const isDisabled = !!disabled;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.base,
        stylesByVariant[variant],
        isDisabled && styles.disabled,
        style,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const stylesByVariant = StyleSheet.create({
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.card },
  danger: { backgroundColor: theme.colors.danger },
});

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  disabled: {
    opacity: 0.55,
  },
});
