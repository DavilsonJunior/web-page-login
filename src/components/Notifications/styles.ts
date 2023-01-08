import theme from "@/styles/theme";
import styled from "styled-components";

export const NotificationsContainer = styled.div`
  width: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    margin-bottom: 20px;

    .header__title {
      display: flex;
      color: ${theme.colors.grey600};

      svg {
        font-size: 22px;
        margin-right: 16px;
        color: ${theme.colors.secondaryColorText};
      }

      span {
        font-size: 18px;
        color: ${theme.colors.secondaryColorText};
      }
    }

    button {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.background};
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 18px;
      transform: filter 400ms;

      &:is(:hover, :focus) {
        filter: brightness(0.8);
      }
    }

    border-bottom: 1px solid ${theme.colors.grey200};
  }

  max-width: 500px;
  margin-left: auto;
  padding: 20px;

  background-color: ${theme.colors.grey200};
`;
