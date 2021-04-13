import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'
import styled, { keyframes, css } from 'styled-components'

const revealTheCard = keyframes`
    from {
      clip-path: circle(0 at 0 0);  
    }
  
    to {
      clip-path: circle(145% at 0 0);    
    }
`

const hideTheCard = keyframes`
    from {
      clip-path: circle(145% at 100% 0);  
    }
  
    to {
      clip-path: circle(0 at 100% 0);    
    }
`

const StyledSelectPlace = styled(FlexColumnCenter)`
    ${({ hide }) =>
        hide
            ? css`
                  animation: ${revealTheCard} 1000ms ease-out 0ms forwards;
              `
            : css`
                  animation: ${hideTheCard} 1000ms ease-in 0ms forwards;
                  pointer-events: 'hide';
              `}

    position: fixed;
    z-index: 2;
    top: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.primaryLight};
    width: ${({ theme }) => theme.widths.asideWidth};

    @media ${({ theme }) => theme.breakPoints.verticalRotation} {
        & {
            width: 100vw;
            padding-top: 5px;
        }
    }
`

export default StyledSelectPlace
