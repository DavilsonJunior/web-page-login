import React, { ButtonHTMLAttributes } from 'react';

import LoadingButton from '../LoadingButton';
import { Container } from './styles';

interface ButtonAuthProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({
  children,
  isLoading,
  ...rest
}) => (
  <Container disabled={isLoading} {...rest}>
    {isLoading ? <LoadingButton /> : children}
  </Container>
);

export default ButtonAuth;
