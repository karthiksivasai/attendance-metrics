
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // If user is already logged in, redirect to home
  if (user) {
    navigate('/');
    return null;
  }
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  const handleSuccess = () => {
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Attendance Calculator</h1>
        <p className="text-muted-foreground">Track your classes and never worry about attendance shortage</p>
      </div>
      
      {isLogin ? (
        <LoginForm onSuccess={handleSuccess} onToggleForm={toggleForm} />
      ) : (
        <SignupForm onSuccess={handleSuccess} onToggleForm={toggleForm} />
      )}
    </div>
  );
}
