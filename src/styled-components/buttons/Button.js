import styled from "styled-components";

const Button = styled.button`
  // Default button
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({theme}) => theme.fonts.weight.thin};
  padding: 0.8em 1.2em;
  border: transparent 0 solid;
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.asideBtnBackgroundAlt};
`
// ${props => props.blue && css`
//   background: white;
//   color: black;
// `}
export default Button