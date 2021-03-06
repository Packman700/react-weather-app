import styled from 'styled-components'

const StyledMain = styled.main`
    background-color: ${({ theme }) => theme.colors.primaryDark};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: calc(100vw - ${({ theme }) => theme.widths.asideWidth});
    padding: 25px calc(${({ theme }) => theme.widths.asideWidth} / 7);

    z-index: 2;
    @media ${({ theme }) => theme.breakPoints.verticalRotation} {
        & {
            width: 100vw;
            z-index: 1;
        }
    }
`

export default StyledMain
