import styled from "styled-components";
import styledButtonTemplate from "styled-components/buttons/StyledButtonTemplate";

const SearchBlueButton = styled(styledButtonTemplate)`
  // Default button
  height: 48px;
  padding: 0 1.2em 0;
  background: ${({theme}) => theme.colors.asideBtnBackgroundAlt};
`

export default SearchBlueButton