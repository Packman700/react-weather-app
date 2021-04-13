import styled, { keyframes } from 'styled-components'
import CARD_TEMPLATE from 'styled-components/div/CARD_TEMPLATE'

const fade = keyframes`
  from {
    opacity: 0;
    transform: translate(-40px, -40px) scale(1.2);
  }
        
  70% {
    transform: translate(0, 0) scale(1);
  }      
        
  to {
    opacity: 1;
  }
`

const StyledWeatherForecastCard = styled(CARD_TEMPLATE)`
    animation: ${fade} ease-out ${({ index }) => (index + 1) * 300 + 200}ms
        ${({ index }) => index * 300}ms backwards;

    width: 120px;
    height: 177px;
    padding: 18px 0;
    z-index: -10;
`

export default StyledWeatherForecastCard
