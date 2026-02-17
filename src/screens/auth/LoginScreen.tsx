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


type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await login({ email, password });
    } catch (err: any) {
      Alert.alert('Login failed', err.message ?? 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <AppText variant="h1">Welcome back</AppText>
      <AppText variant="body">Login to continue tracking your habits</AppText>

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

      <Spacer h={24} />

      <Button title={loading ? 'Logging in…' : 'Login'} onPress={onSubmit} disabled={loading} />

      <Spacer h={16} />

      <Button
        title="Create account"
        variant="secondary"
        onPress={() => navigation.navigate('Register')}
      />
    </Screen>
  );
}
