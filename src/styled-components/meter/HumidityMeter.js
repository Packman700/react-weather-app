import styled from 'styled-components'

const HumidityMeter = styled.meter`
    width: 100%;
    height: 6px;
    border-radius: 50px;

    ::-webkit-meter-bar {
        background-color: ${({ theme }) => theme.colors.white};
        height: 6px;
        border: 0 solid transparent;
    }

    ::-webkit-meter-optimum-value {
        background-color: ${({ theme }) => theme.colors.complementary};
        background-size: 100% 100%;
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px;
        border: 0 solid transparent;
    }
`

export default HumidityMeter
