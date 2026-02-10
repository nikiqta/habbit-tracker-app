import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HabitsStack from './HabitsStack';
import ProfileStack from './ProfileStack';
import { MainTabsParamList } from 'types/navigation';
import Ionicons from '@expo/vector-icons/build/Ionicons';

const Tab = createBottomTabNavigator<MainTabsParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HabitsTab"
        component={HabitsStack}
        options={{
          title: 'Habits',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fitness" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
