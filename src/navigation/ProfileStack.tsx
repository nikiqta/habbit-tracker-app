import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from 'screens/profile/ProfileScreen';

import { ProfileStackParamList } from 'types/navigation';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
