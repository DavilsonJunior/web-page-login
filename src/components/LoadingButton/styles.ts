import theme from '@/styles/theme';
import styled, { keyframes } from 'styled-components';

const dotPulseBefore = keyframes`
    0% {
    box-shadow: 9984px 0 0 -5px ${theme.colors.background};
  }
  30% {
    box-shadow: 9984px 0 0 2px ${theme.colors.background};
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px ${theme.colors.background};
  }
`;

const dotPulseAfter = keyframes`
  0% {
    box-shadow: 10014px 0 0 -5px ${theme.colors.background};
  }
  30% {
    box-shadow: 10014px 0 0 2px ${theme.colors.background};
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px ${theme.colors.background};
  }
`;

const dotPulse = keyframes`
   0% {
    box-shadow: 9999px 0 0 -5px ${theme.colors.background};
  }
  30% {
    box-shadow: 9999px 0 0 2px ${theme.colors.background};
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px ${theme.colors.background};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem 0;
  overflow: hidden;
`;

export const DotFlashing = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.background};
  box-shadow: 9999px 0 0 -5px ${theme.colors.background};
  animation: ${dotPulse} 1.5s infinite linear;
  animation-delay: 0.25s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${theme.colors.background};
    color: ${theme.colors.background};
  }

  &::before {
    box-shadow: 9984px 0 0 -5px ${theme.colors.background};
    animation: ${dotPulseBefore} 1.5s infinite linear;
    animation-delay: 0s;
  }

  &::after {
    box-shadow: 10014px 0 0 -5px ${theme.colors.background};
    animation: ${dotPulseAfter} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`;
