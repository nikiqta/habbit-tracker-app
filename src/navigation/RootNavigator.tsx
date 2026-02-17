import AuthStack from './AuthStack';
import MainTabs from './MainTabs';
import { useAuth } from '@hooks/useAuth';
import Loader from '@components/ui/Loader';
import Screen from '@components/ui/Screen';

export default function RootNavigator() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <Screen>
        <Loader />
      </Screen>
    );
  }

  return isAuthenticated ? <MainTabs /> : <AuthStack />;
}
