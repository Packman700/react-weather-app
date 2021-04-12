import styled from 'styled-components'
import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'

const StyledLoadingWeatherData = styled(FlexColumnCenter)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    
    //padding: 10vh 0 10vh;
    z-index: 10;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.primaryLight};
`

export default StyledLoadingWeatherData
