import React from 'react'
import StyledLoadingWeatherData from 'styled-components/StyledLoadingWeatherData'
import Small from 'styled-components/small/Small'

function LoadingWeatherData() {
    return (
        <StyledLoadingWeatherData>
            <p>Loading data</p>
            <Small>Please share your localization</Small>
        </StyledLoadingWeatherData>
    )
}

export default LoadingWeatherData
