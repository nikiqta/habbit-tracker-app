import { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { clearToken, getToken, setToken } from '@services/storage/authStorage';
import { AuthUser, LoginPayload, RegisterPayload } from 'types/auth';

type AuthContextValue = {
  isLoading: boolean;
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setTokenState] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);

  // Auto-login on app start
  useEffect(() => {
    (async () => {
      try {
        const stored = await getToken();
        if (stored) {
          setTokenState(stored);
          // For now: minimal user object. Later we’ll load profile from API.
          setUser({ id: 'local', email: 'user@local' });
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const login = useCallback(async ({ email, password }: LoginPayload) => {
    // TEMP (until backend): pretend login success if basic input exists
    if (!email.trim() || password.length < 6) {
      throw new Error('Invalid credentials.');
    }

    const fakeToken = `token_${Date.now()}`;
    await setToken(fakeToken);

    setTokenState(fakeToken);
    setUser({ id: 'local', email });
  }, []);

  const register = useCallback(async ({ email, password, confirmPassword }: RegisterPayload) => {
    if (!email.trim()) throw new Error('Email is required.');
    if (password.length < 6) throw new Error('Password must be at least 6 characters.');
    if (password !== confirmPassword) throw new Error('Passwords do not match.');

    // TEMP: auto-login after register
    const fakeToken = `token_${Date.now()}`;
    await setToken(fakeToken);

    setTokenState(fakeToken);
    setUser({ id: 'local', email });
  }, []);

  const logout = useCallback(async () => {
    await clearToken();
    setTokenState(null);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoading,
      user,
      token,
      isAuthenticated: !!token,
      login,
      register,
      logout,
    }),
    [isLoading, user, token, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
