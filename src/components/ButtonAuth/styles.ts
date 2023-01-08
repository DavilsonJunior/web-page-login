import theme from "@/styles/theme";
import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  background: ${theme.colors.primary};
  width: 100%;
  height: 2.82rem;
  margin-bottom: 0.625rem;
  border-radius: 0.5rem;
  border: 0;
  color: ${theme.colors.background};
  transition: background-color 0.5s;

  &[disabled] {
    cursor: not-allowed;

    &:hover,
    & {
      background: ${theme.colors.tooltip};
    }
  }

  &:hover {
    background: ${shade(0.2, theme.colors.primary)};
  }
`;
