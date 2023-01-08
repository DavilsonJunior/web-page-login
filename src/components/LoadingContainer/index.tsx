import logo from '@/assets/logo.svg';
import { Spinner } from '../Spinner';
import { Container } from './styles';

export const LoadingContainer: React.FC = () => (
  <Container>
    <img src={logo} alt="logo NossaEntrega" className="loading__icon" />
    <Spinner theme="light" />
  </Container>
);
