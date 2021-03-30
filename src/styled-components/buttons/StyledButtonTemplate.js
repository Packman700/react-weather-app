import styled from "styled-components";

const styledButtonTemplate = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({theme}) => theme.fonts.weight.thin};
  border: transparent 0 solid;
  color: ${({theme}) => theme.colors.white};
  background: transparent;
`

export default styledButtonTemplate