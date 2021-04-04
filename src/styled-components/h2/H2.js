import styled from 'styled-components'

const H2 = styled.h2`
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
    margin-top: ${({ mt }) => (mt ? mt : 0)};
    transform: translateX(-250px);

    @media ${({ theme }) => theme.breakPoints.smallScreen} {
        transform: translateX(-62px);
    }
`

export default H2
