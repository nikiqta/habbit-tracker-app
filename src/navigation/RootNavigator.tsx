import { useMemo, useState } from 'react';
import MainTabs from './MainTabs';
import AuthStack from './AuthStack';

export default function RootNavigator() {
  // TEMP for now: replace later with SecureStore + real auth logic
  const [isAuthed] = useState(true);

  // Memo only to avoid re-mount churn when you later add providers
  const content = useMemo(() => {
    return isAuthed ? <MainTabs /> : <AuthStack />;
  }, [isAuthed]);

  return content;
}
