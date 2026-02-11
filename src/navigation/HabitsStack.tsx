import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HabitListScreen } from '@screens/habits/HabitListScreen';
import { HabitDetailsScreen } from '@screens/habits/HabitDetailsScreen';
import { HabitUpsertScreen } from '@screens/habits/HabitUpsertScreen';
import { HabitsStackParamList } from 'types/navigation';

const Stack = createNativeStackNavigator<HabitsStackParamList>();

export default function HabitsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="HabitList"
        component={HabitListScreen}
        options={{ title: 'Habits' }}
      />
      <Stack.Screen
        name="HabitDetails"
        component={HabitDetailsScreen}
        options={{ title: 'Details' }}
      />
      <Stack.Screen
        name="HabitUpsert"
        component={HabitUpsertScreen}
        options={{ title: 'Add / Edit' }}
      />
    </Stack.Navigator>
  );
}
