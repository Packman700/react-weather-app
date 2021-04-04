import styled from 'styled-components'

const WindDirectionIcon = styled.div`
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: rotate(${({ rotateDeg }) => rotateDeg}deg);
    height: 27px;
    width: 27px;

    ::after {
        position: absolute;
        top: calc(0.4em);
        left: calc(0.45em);
        font-family: 'Material Icons', 'Raleway', sans-serif;
        font-size: 14px;
        font-weight: 300;
        content: 'navigation';
    }
`

export default WindDirectionIcon
