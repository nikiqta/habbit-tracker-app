import { StyleSheet, View } from 'react-native';

import { theme } from '@constants/theme';
import AppText from './AppText';
import Button from './Button';

type Props = {
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
};

export default function EmptyState({ title, description, actionText, onAction }: Props) {
  return (
    <View style={styles.root}>
      <AppText variant="h2" style={styles.title}>
        {title}
      </AppText>

      {!!description && (
        <AppText variant="body" style={styles.desc}>
          {description}
        </AppText>
      )}

      {!!actionText && !!onAction && (
        <Button title={actionText} onPress={onAction} style={styles.btn} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: theme.spacing.xl,
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  title: { textAlign: 'center' },
  desc: { textAlign: 'center', color: theme.colors.muted },
  btn: { marginTop: theme.spacing.md, alignSelf: 'stretch' },
});
