import styled from "styled-components";
import styledButtonTemplate from "styled-components/buttons/StyledButtonTemplate";

const SearchGrayButton = styled(styledButtonTemplate)`
  // Default button
  height: 40px;
  padding: 18px;
  background: ${({theme}) => theme.colors.asideBtnBackground};
`

export default SearchGrayButton