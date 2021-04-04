import styled from 'styled-components'

const ProgressBarSmall = styled.small`
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: 12px;
    font-weight: 700;
    align-self: ${({ align }) => align};
    transform: translateX(${({ x }) => x && x});
`

export default ProgressBarSmall
