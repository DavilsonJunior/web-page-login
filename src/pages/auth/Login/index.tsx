import { useCallback } from 'react';
import { useFormik } from 'formik';
import { FiLock, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '@/components/Input';
import ButtonAuth from '@/components/ButtonAuth';

import { loginSchema } from '@/schemas/AuthSchema';

import loginImg from '@/assets/login.svg';

import {
  PageLogin,
  Container,
  Background,
  Content,
  AnimationContainer
} from './styles';
import { useAuth } from '@/hooks/useAuth';

interface DataLogin {
  email: string;
  password: string;
}

export function Login() {
  const { signIn, status } = useAuth();
  const navigate = useNavigate();

  if (status === 'authenticated') navigate('/');

  const handleSignIn = useCallback(async ({ email, password }: DataLogin) => {
    try {      
      await signIn({
        email, 
        password
      });
      navigate('/');
    } catch (err) {
      toast.error('Falha ao realizar login! verifique seus dados.');
    }
  }, []);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    errors
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: handleSignIn
  });

  return (
    <Container>
      <PageLogin>
        <Background>
          <img src={loginImg} alt="Background" />
        </Background>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <p>Acesse o nosso Dashboard via login</p>

              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite o seu e-mail"
                icon={FiMail}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={!!errors.email}
                errorMessage={errors.email}
              />

              <label htmlFor="password">Senha</label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                icon={FiLock}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={!!errors.password}
                errorMessage={errors.password}
              />

              <ButtonAuth
                isLoading={isSubmitting}
                type="submit"
                className="primary"
              >
                Entrar
              </ButtonAuth> 
            </form>
          </AnimationContainer>
        </Content>
      </PageLogin>
    </Container>
  );
}
