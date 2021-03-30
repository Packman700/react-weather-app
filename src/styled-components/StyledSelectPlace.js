import FlexColumnCenter from "styled-components/position/FlexColumnCenter";
import styled from "styled-components";

const StyledSelectPlace = styled(FlexColumnCenter)`
  position: fixed;
  top:0;
  min-height: 100vh;
  background: ${({theme}) => theme.colors.primaryLight};
  
  @media ${({theme}) => theme.breakPoints.smallScreen}{
    & {
      width: 100vw;
      padding-top: 5px;
    }
  }
`

export default StyledSelectPlace