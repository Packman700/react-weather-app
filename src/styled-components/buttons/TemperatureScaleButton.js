import styled, { css } from 'styled-components'
import StyledButtonTemplate from 'styled-components/buttons/BUTTON_TEMPLATE'

const TemperatureScaleButton = styled(StyledButtonTemplate)`
    position: relative;
    height: 40px;
    width: 40px;

    background: ${({ theme }) => theme.colors.grayDark};
    border-radius: 50%;

    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -8px;

    ::before {
        content: '°';
        position: absolute;
        top: 8px;
        left: 11px;

        font-size: 25px;
        font-weight: 500;
    }

    :focus {
        -moz-outline-radius: 50%;
    }

    ${({ active }) =>
        active &&
        css`
            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.primaryDark};
            font-weight: 600;

            ::before {
                font-weight: 600;
            }
        `}
`

export default TemperatureScaleButton
