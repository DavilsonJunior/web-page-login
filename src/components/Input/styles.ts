import theme from "@/styles/theme";
import styled, { css } from "styled-components";

interface ContainerProps {
  error?: boolean | null;
}

export const Container = styled.div<ContainerProps>`
  background: ${theme.colors.background};
  border-radius: 0.5rem;
  padding: 0.7rem;
  width: 100%;

  border: 1px solid ${theme.colors.grey600};

  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${theme.colors.error};
    `}
  color: ${theme.colors.primaryColorText};

  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 1.25rem;
    line-height: 1.25rem;
    font-size: 1rem;
    background: transparent;
    border: 0;
    color: ${theme.colors.primaryColorText};

    &::placeholder {
      color: ${theme.colors.grey600};
    }
  }

  svg {
    margin-right: 0.625rem;
    color: ${theme.colors.grey600};
  }
`;

export const ErrorMessageFormik = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.error};
  font-weight: 500;
  margin-bottom: 0.6rem;
`;
