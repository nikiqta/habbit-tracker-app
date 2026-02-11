import { ActivityIndicator, View } from 'react-native';
import { theme } from '@constants/theme';

export default function Loader() {
  return (
    <View style={{ paddingVertical: 16 }}>
      <ActivityIndicator color={theme.colors.primary} />
    </View>
  );
}
