import styled from "styled-components";

const CARD_TEMPLATE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100px;
  height: 100px;

  background: ${({ theme }) => theme.colors.primaryLight};
`;

export default CARD_TEMPLATE;
