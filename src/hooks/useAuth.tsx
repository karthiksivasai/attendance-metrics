
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '@/services/authService';
import { toast } from '@/hooks/use-toast';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = authService.getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await authService.login(email, password);
      setUser(response.user);
      toast({
        title: 'Login successful',
        description: `Welcome back, ${response.user.name || response.user.email}!`,
      });
    } catch (error) {
      let errorMessage = 'Failed to login';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: 'Login failed',
        description: errorMessage,
        variant: 'destructive',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await authService.signup(name, email, password);
      setUser(response.user);
      toast({
        title: 'Account created',
        description: `Welcome, ${response.user.name}!`,
      });
    } catch (error) {
      let errorMessage = 'Failed to create account';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: 'Signup failed',
        description: errorMessage,
        variant: 'destructive',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
