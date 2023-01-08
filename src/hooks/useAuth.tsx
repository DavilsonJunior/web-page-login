import {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingContainer } from '@/components/LoadingContainer';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  status: AuthStatus;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface Props {
  children: ReactNode;
}

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const mockCredentials = {
  email: 'admin@gmail.com',
  password: '123456'
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [status, setStatus] = useState<AuthStatus>('loading');

  const navigate = useNavigate();

  const signOut = useCallback(() => {
    localStorage.removeItem('web-page')
    setStatus('unauthenticated');
    navigate('/login');
  }, []);

  const auth = useCallback(async () => {
    try {    
      setTimeout(() => {
        setStatus('authenticated');
        localStorage.setItem('web-page', 'authenticated')
        navigate('/');
      }, 300);
    } catch (error) {
      signOut();
    }
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      try {     
        if (mockCredentials.email === email && mockCredentials.password === password) {
          return auth();
        }

        throw new Error();      
      } catch (error) {
        setStatus('unauthenticated');
        throw error;
      }
    },
    [auth]
  );

  useEffect(() => {
    const statusData = localStorage.getItem('web-page') 

    if (statusData && statusData === 'authenticated' || status === 'authenticated') {
      auth();
    } else {
      setStatus('unauthenticated');
      navigate('/login');
    }    
  }, [status]);

  const context: AuthContextData = useMemo(
    () => ({
      status,
      setStatus,
      signIn,
      signOut,
    }),
    [
      status,
      setStatus,
      signIn,
      signOut,
    ]
  );



  return (
    <AuthContext.Provider value={context}>
      {status === 'loading' ? <LoadingContainer /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
