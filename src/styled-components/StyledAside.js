import styled from "styled-components";
import FlexColumnCenter from "./position/FlexColumnCenter";

const StyledAside = styled(FlexColumnCenter)`
  
  width: ${({theme}) => theme.widths.asideWidth};
  background-color: ${({theme}) => theme.colors.primaryLight};
  padding: 19px calc(100%/25);
  
  @media ${({theme}) => theme.breakPoints.smallScreen}{
    &{
      width: 100vw;
    }
  }
`

export default StyledAside