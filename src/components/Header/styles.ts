import theme from "@/styles/theme";
import styled, { css } from "styled-components";

interface HeaderContainerProps {
  isNotification: boolean;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  height: 80px;

  padding: 20px;
  border-bottom: 2px solid #eee;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button.notification {
    ${({ isNotification }) =>
      isNotification &&
      css`
        &::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: red;
          position: absolute;
          right: 0;
        }
      `}
  }

  button {
    position: relative;

    svg {
      color: ${theme.colors.primary};
      transition: color 400ms;
      margin-left: 16px;
    }

    &:is(:hover, :focus) {
      svg {
        color: green;
      }
    }
  }
`;
