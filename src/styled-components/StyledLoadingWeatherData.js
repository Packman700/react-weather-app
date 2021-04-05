import styled, { keyframes } from 'styled-components'
import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledLoadingWeatherData = styled(FlexColumnCenter)`
    position: fixed;
    height: 100vh;
    width: 100vw;

    z-index: 10;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.primaryLight};

    ::before {
        animation: ${rotate} 2000ms linear infinite normal;
        font-family: 'Material Icons', 'Raleway', sans-serif;
        font-size: 42px;
        font-weight: 300;
        content: 'refresh';
    }
`

export default StyledLoadingWeatherData
