import styled from 'styled-components'

const TodayTemperatureH1 = styled.h1`
    font-size: 150px;
    font-weight: 400;
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
    margin-top: ${({ mt }) => (mt ? mt : 0)};
`

export default TodayTemperatureH1
