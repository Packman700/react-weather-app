import styled from "styled-components";
import BUTTON_TEMPLATE from "styled-components/buttons/BUTTON_TEMPLATE";

const SearchGrayButton = styled(BUTTON_TEMPLATE)`
  // Default button
  height: 40px;
  padding: 18px;
  background: ${({theme}) => theme.colors.asideBtnBackground};
`

export default SearchGrayButton