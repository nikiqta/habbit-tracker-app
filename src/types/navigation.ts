export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type HabitsStackParamList = {
  HabitList: undefined;
  HabitDetails: { habitId: string };
  HabitUpsert: { habitId?: string } | undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type MainTabsParamList = {
  HabitsTab: undefined;
  ProfileTab: undefined;
};
