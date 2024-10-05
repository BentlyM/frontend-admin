import React, { useContext, createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';



type User = {
  username: string,
  password: string,
  email: string,
  role: string
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null; 
  token: string;
  login: (data: { email: string; password: string }) => Promise<string | void>;
  logout: () => void;
}

const defaultContextValue: AuthContextType = {
  isAuthenticated: false,
  user: null,
  token: '',
  login: async () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(localStorage.getItem('jwt')));
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>(localStorage.getItem('jwt') || '');

  const navigate = useNavigate();

  const login = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch('https://backend-uoiu.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res: {
        success: boolean;
        msg: string;
        user: User;
        token: string;
        err?: string;
      } = await response.json();

      if (res.success) {
        setUser(res.user);
        setToken(res.token);
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('user', res.user.username);
        setIsAuthenticated(true);
        navigate('/');
      } else {
        throw new Error(res.err || 'Login failed');
      }
    } catch (error) {
      if(error instanceof Error){
        return error.message
      }
    }
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const value = {
    user,
    token,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
