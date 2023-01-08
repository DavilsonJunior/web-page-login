import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: ${theme.colors.background};
  z-index: 1000;

  .loading__icon {
    height: 5rem;

    margin-bottom: 1.5rem;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fade-in 0.5s linear;
`;
