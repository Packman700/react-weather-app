import styled from 'styled-components'

const Small = styled.small`
    color: ${({ theme }) => theme.colors.grayMuted};
    font-size: 16px;
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
`

export default Small
