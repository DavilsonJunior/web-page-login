import React, { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, ErrorMessageFormik } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
  error?: boolean | null;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  error,
  errorMessage,
  ...rest
}) => (
  <>
    <Container error={error}>
      {Icon && <Icon size={18} />}
      <input autoComplete="off" {...rest} />
    </Container>
    <ErrorMessageFormik>{errorMessage}</ErrorMessageFormik>
  </>
);

export default Input;
