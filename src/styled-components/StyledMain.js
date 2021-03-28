import styled from "styled-components";

const StyledMain = styled.main`
  width: calc(100vw - ${({theme}) => theme.widths.asideWidth});
  
`

export default StyledMain