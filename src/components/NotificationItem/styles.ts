import theme from "@/styles/theme";
import styled from "styled-components";

export const NotificationItemContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;

  display: flex;

  .content {
    strong {
      font-size: 1.375rem;
      color: ${theme.colors.secondaryColorText};
    }

    p {
      font-size: 16px;
      color: ${theme.colors.grey600};
      margin-top: 10px;
    }
  }

  button {
    min-width: 50px;

    svg {
      font-size: 22px;
      color: ${theme.colors.secondary};
    }
  }
`;
