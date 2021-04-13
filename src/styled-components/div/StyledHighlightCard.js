import styled, { keyframes } from 'styled-components'
import CARD_TEMPLATE from 'styled-components/div/CARD_TEMPLATE'
const fade = keyframes`
  from {
    opacity: 0;
    transform: translate(-20px, -20px) scale(1.2);
  }
  
  70% {
     transform: translate(0, 0) scale(1);
  }
        
  to {
    opacity: 1;
  }
`

const StyledHighlightCard = styled(CARD_TEMPLATE)`
    animation: ${fade} ease-out ${({ index }) => index * 200 + 800}ms
        ${({ index }) => index * 300 + 300}ms backwards;

    height: ${({ small }) => (small ? '160px' : '204px')};
    width: 328px;

    padding-top: 22px;
    padding-bottom: 26px;

    margin-left: ${({ ml }) => ml && ml};
    margin-right: ${({ mr }) => mr && mr};
`

export default StyledHighlightCard
