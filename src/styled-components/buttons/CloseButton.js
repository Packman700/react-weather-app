import styled from "styled-components";
import BUTTON_TEMPLATE from "styled-components/buttons/BUTTON_TEMPLATE";

const CloseButton = styled(BUTTON_TEMPLATE)`
  ::before{
    font-family: 'Material Icons', 'Raleway', sans-serif;
    font-size: 34px;
    font-weight: 300;
    content: "close";
  }
`

export default CloseButton