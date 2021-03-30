import styled from "styled-components";
import styledButtonTemplate from "./StyledButtonTemplate";

const Button = styled(styledButtonTemplate)`
  // Default button
  height: 48px;
  padding: 0.8em 1.2em;
  background: ${({theme}) => theme.colors.asideBtnBackgroundAlt};
`

export default Button