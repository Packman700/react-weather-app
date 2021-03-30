import styled from "styled-components";
import styledButtonTemplate from "./StyledButtonTemplate";

const CloseButton = styled(styledButtonTemplate)`
  ::before{
    font-family: 'Material Icons', 'Raleway', sans-serif;
    font-size: 34px;
    font-weight: 300;
    content: "close";
  }
`

export default CloseButton