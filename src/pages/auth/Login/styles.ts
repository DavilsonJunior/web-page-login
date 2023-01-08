import theme from "@/styles/theme";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const PageLogin = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  width: 100%;
  max-width: 43.75rem;
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(3.125rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${apperFromRight} 2s;

  p {
    font-size: 1rem;
    color: ${theme.colors.grey600};
    text-align: justify;
    margin-bottom: 1.875rem;
  }

  form {
    margin: 5rem 0;
    width: 21rem;
    text-align: left;

    h2 {
      margin-bottom: 0.78rem;
    }

    > label {
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 50rem;
      color: ${theme.colors.secondaryColorText};
    }
  }

  @media (max-width: 700px) {
    form {
      margin: 1.25rem 0;
    }

    p {
      margin-bottom: 1rem;
    }
    form {
      width: 19rem;
    }
  }
`;

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.backgroundImage};

  img {
    max-width: 50rem;
    width: 100%;
    background: no-repeat center;
    background-size: cover;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
