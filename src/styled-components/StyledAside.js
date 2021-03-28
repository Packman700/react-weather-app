import styled from "styled-components";


const StyledAside = styled.aside`
    width: ${({theme}) => theme.widths.asideWidth};
    background-color: ${({theme}) => theme.colors.primaryLight};
`

export default StyledAside