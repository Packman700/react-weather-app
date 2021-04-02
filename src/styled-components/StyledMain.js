import styled from "styled-components";

const StyledMain = styled.main`
   width: calc(100vw - ${({theme}) => theme.widths.asideWidth});
  //width: 20vw ;

  @media ${({theme}) => theme.breakPoints.smallScreen}{
    &{
      width: 100vw;
    }
  }
`

export default StyledMain