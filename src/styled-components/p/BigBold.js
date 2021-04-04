import styled from 'styled-components'

const BigBold = styled.p`
    font-size: 62px;
    font-weight: 900;
    word-spacing: ${({ WordSpacing }) => (WordSpacing ? WordSpacing : 0)};
    transform: translateY(${({ y }) => y && y});
`

export default BigBold
