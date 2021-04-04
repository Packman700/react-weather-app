import React from 'react'
import TemperatureScaleButton from 'styled-components/buttons/TemperatureScaleButton'
import FlexRowCenter from 'styled-components/position/FlexRowCenter'
import FreeSpace from '../styled-components/position/FreeSpace'

function SwitchTemperatureScale(props) {
    // eslint-disable-next-line no-unused-vars
    const { handleChange, selectedTemperatureScale } = props.data
    return (
        <FlexRowCenter justifyContent='flex-end' mb='25px'>
            <TemperatureScaleButton
                active={selectedTemperatureScale === 'c' && true}
                onClick={handleChange}
                name='temperatureScale'
                value='c'
            >
                C {/* ° is ::before */}
            </TemperatureScaleButton>

            <FreeSpace mr='12px' />

            <TemperatureScaleButton
                active={selectedTemperatureScale === 'f' && true}
                onClick={handleChange}
                name='temperatureScale'
                value='f'
            >
                F {/* ° is ::before */}
            </TemperatureScaleButton>
        </FlexRowCenter>
    )
}

export default SwitchTemperatureScale
