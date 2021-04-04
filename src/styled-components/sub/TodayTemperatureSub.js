import styled from 'styled-components'

const TodayTemperatureSub = styled.sub`
    //position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.colors.grayLight};
    font-weight: 100;
    font-size: 0.35em;
    transform: translateY(-0.6em);
`

export default TodayTemperatureSub
