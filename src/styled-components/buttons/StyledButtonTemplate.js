import styled from "styled-components";

const styledButtonTemplate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border: transparent 0 solid;
  color: ${({theme}) => theme.colors.white};
  background: transparent;
`

export default styledButtonTemplate