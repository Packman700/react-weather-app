import styled from "styled-components";

const StyledMain = styled.main`
  width: calc(100vw - ${({theme}) => theme.widths.asideWidth});

  @media ${({theme}) => theme.breakPoints.smallScreen}{
    &{
      width: 100vw;
    }
  }
`

export default StyledMain