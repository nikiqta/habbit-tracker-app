import Screen from 'components/ui/Screen';
import { Text } from 'react-native';
import { theme } from 'constants/theme';

export const LoginScreen: React.FC = () => {
  return (
    <Screen>
      <Text style={theme.text.h1}>Login screen</Text>
    </Screen>
  );
};

export default LoginScreen;
