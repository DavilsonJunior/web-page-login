import theme from '@/styles/theme';
import styled from 'styled-components';

interface SpinnerContainerProps {
  themeSpinner?: 'dark' | 'light';
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  .spinnerContainer {
    grid-column: 1/ -1;
    text-align: center;

    .spinner {
      display: inline-block;
      z-index: 9999;

      width: 22px;
      height: 22px;

      border: solid 2px transparent;
      border-top-color: ${props =>
        props.themeSpinner === 'dark'
          ? theme.colors.background
          : theme.colors.primary};
      border-left-color: ${props =>
        props.themeSpinner === 'dark'
          ? theme.colors.background
          : theme.colors.primary};
      border-radius: 50%;

      -webkit-animation: spinner 400ms linear infinite;
      animation: spinner 400ms linear infinite;
    }

    @-webkit-keyframes spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
