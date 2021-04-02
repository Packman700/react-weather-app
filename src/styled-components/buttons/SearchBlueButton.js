import styled from "styled-components";
import BUTTON_TEMPLATE from "styled-components/buttons/BUTTON_TEMPLATE";

const SearchBlueButton = styled(BUTTON_TEMPLATE)`
  // Default button
  height: 48px;
  padding: 0 1.2em 0;
  background: ${({theme}) => theme.colors.asideBtnBackgroundAlt};
`

export default SearchBlueButton