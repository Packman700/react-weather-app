import React from 'react'
import StyledLoadingWeatherData from 'styled-components/StyledLoadingWeatherData'
import Small from 'styled-components/small/Small'
import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'
import ThinWhite from 'styled-components/p/ThinWhite'
import LoadIcon from 'styled-components/icon/LoadIcon'

function LoadingWeatherData() {
    return (
        <StyledLoadingWeatherData>
            <FlexColumnCenter mt='38vh'>
                <LoadIcon mb='20px' />
                <p>Loading data</p>
                <Small>Please share your localization</Small>
            </FlexColumnCenter>
            <FlexColumnCenter mt='35vh' pr='10px' pl='10px'>
                <ThinWhite>
                    If data don't load go to
                    <a
                        href='https://cors-anywhere.herokuapp.com/corsdemo'
                        target='_blank'
                    >
                        this website
                    </a>
                    click the button and back here
                </ThinWhite>
            </FlexColumnCenter>
        </StyledLoadingWeatherData>
    )
}

export default LoadingWeatherData
