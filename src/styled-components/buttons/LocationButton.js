import styled from "styled-components";
import styledButtonTemplate from "styled-components/buttons/StyledButtonTemplate";

const LocationButton = styled(styledButtonTemplate)`
  height: 40px;
  width: 40px;
  
  background: ${({theme}) => theme.colors.asideBtnBackground};
  border-radius: 50%;
  
  ::before{
    font-family: 'Material Icons', 'Raleway', sans-serif;
    font-size: 26px;
    font-weight: 300;
    content: "gps_fixed";
  }
  
  :focus{
    -moz-outline-radius: 50%;
  }
`

export default LocationButton