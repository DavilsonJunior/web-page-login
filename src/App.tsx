import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import Routes from './routes'
import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme} />
      <ToastContainer position="bottom-center" theme="colored" />
        <BrowserRouter>
          <AuthProvider>
              <Routes />
          </AuthProvider>   
        </BrowserRouter>
    </div>
  )
}

export default App
