import styled, { keyframes, css } from 'styled-components'

const slideInFromLeft = keyframes`
        0% {
                color: #ac98be;
                transform: translateX(calc(-50vw));
                opacity: 0.4;
        }
        100% {
                transform: translateX(0);
                opacity: 1;
        }
`

const CityListItem = styled.li`
    position: relative;
    transform: translateX(calc(-47vw));
    animation: ${slideInFromLeft} 1200ms ease-out
        ${({ index }) => index * 130}ms forwards;

    display: flex;
    align-items: center;

    width: 100%;
    height: 64px;
    margin-bottom: 17px;
    padding-left: 12px;

    font-weight: 100;
    font-size: 19px;
    cursor: pointer;

    :hover {
        border: 1px solid ${({ theme }) => theme.colors.grayDark};
        padding-left: 11px;
        ::after {
            position: absolute;
            font-family: 'Material Icons', 'Raleway', sans-serif;
            content: 'keyboard_arrow_right';
            font-size: 28px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.grayMuted};
            right: 8px;
            top: 18px;
        }
    }
`

export default CityListItem
