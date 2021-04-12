import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'
import styled from 'styled-components'

const StyledSelectPlace = styled(FlexColumnCenter)`
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
