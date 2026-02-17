import { Alert, StyleSheet, View } from 'react-native';

import AppText from '@components/ui/AppText';
import Button from '@components/ui/Button';
import Card from '@components/ui/Card';
import Screen from '@components/ui/Screen';
import Spacer from '@components/ui/Spacer';

import { theme } from '@constants/theme';
import { useAuth } from '@hooks/useAuth';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const onLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            await logout();
          } catch (err: any) {
            Alert.alert('Logout failed', err?.message ?? 'Something went wrong');
          }
        },
      },
    ]);
  };

  return (
    <Screen>
      <AppText variant="h1">Profile</AppText>
      <AppText variant="body" style={styles.subtitle}>
        Manage your account
      </AppText>

      <Spacer h={24} />

      <Card>
        <View style={styles.row}>
          <AppText variant="small" style={styles.label}>
            Email
          </AppText>
          <AppText variant="body">{user?.email ?? 'Unknown'}</AppText>
        </View>
      </Card>

      <Spacer h={24} />

      <Button title="Logout" variant="danger" onPress={onLogout} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
  },
  row: {
    gap: theme.spacing.xs,
  },
  label: {
    color: theme.colors.muted,
  },
});
