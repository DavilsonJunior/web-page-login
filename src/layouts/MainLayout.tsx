import { ReactNode } from 'react';
import { Container } from './styles';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
