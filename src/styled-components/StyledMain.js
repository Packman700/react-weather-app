import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  width: calc(100vw - ${({theme}) => theme.widths.asideWidth});
  padding: 25px calc(${({theme}) => theme.widths.asideWidth} / 7);

  @media ${({theme}) => theme.breakPoints.verticalRotation}{
    &{
      width: 100vw;
    }
  }
`

export default StyledMain