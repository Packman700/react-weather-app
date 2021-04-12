import styled from 'styled-components'

const ThinWhite = styled.p`
    font-size: 16px;
    font-weight: 100;
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
    margin-top: ${({ mt }) => (mt ? mt : 0)};
    
`

export default ThinWhite
