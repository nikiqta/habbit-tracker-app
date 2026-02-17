import { useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Screen from '@components/ui/Screen';
import AppText from '@components/ui/AppText';
import TextField from '@components/ui/TextField';
import Button from '@components/ui/Button';
import Spacer from '@components/ui/Spacer';

import { useAuth } from '@hooks/useAuth';
import { AuthStackParamList } from 'types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  const { register } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await register({ email, password, confirmPassword });
    } catch (err: any) {
      Alert.alert('Registration failed', err.message ?? 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <AppText variant="h1">Create account</AppText>
      <AppText variant="body">Start building better habits today</AppText>

      <Spacer h={24} />

      <TextField
        label="Email"
        placeholder="you@email.com"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Spacer />

      <TextField
        label="Password"
        placeholder="••••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Spacer />

      <TextField
        label="Confirm password"
        placeholder="••••••••"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Spacer h={24} />

      <Button
        title={loading ? 'Creating account…' : 'Register'}
        onPress={onSubmit}
        disabled={loading}
      />

      <Spacer h={16} />

      <Button
        title="Back to login"
        variant="secondary"
        onPress={() => navigation.goBack()}
      />
    </Screen>
  );
}
