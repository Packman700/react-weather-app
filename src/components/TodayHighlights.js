import React from 'react'
import StyledHighlightCard from 'styled-components/div/StyledHighlightCard'
import FlexRowCenter from 'styled-components/position/FlexRowCenter'
import HighlightsGrid from 'styled-components/grid/HighlightsGrid'
import HighlightHeader from 'styled-components/header/HighlightHeader'
import BigBold from 'styled-components/p/BigBold'
import HighlightSub from 'styled-components/sub/HighlightSub'
import ThinWhite from 'styled-components/p/ThinWhite'
import WindDirectionIcon from 'styled-components/icon/WindDirectionIcon'
import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'
import ProgressBarSmall from 'styled-components/small/ProgressBarSmall'
import HumidityMeter from 'styled-components/meter/HumidityMeter'
import H2 from 'styled-components/h2/H2'

function TodayHighlights(props) {
    if (props?.data?.consolidated_weather === undefined) return null

    let {
        wind_direction_compass: windDirection,
        wind_direction: compassRotate,
        wind_speed: windSpeed,
        air_pressure: airPressure,
        humidity,
        visibility,
    } = props.data.consolidated_weather[0]

    compassRotate = Math.round(compassRotate)
    windSpeed = Math.round(windSpeed)
    airPressure = Math.round(airPressure)
    humidity = Math.round(humidity)
    visibility = (Math.round(visibility * 10) / 10).toString().replace('.', ',')

    return (
        <FlexColumnCenter mt='20px' as='section' width='100%'>
            <H2 mb='20px'>Today's Highlights</H2>
            <HighlightsGrid>
                {/* Todo add semantic task names */}
                <StyledHighlightCard as='article'>
                    <HighlightHeader>Wind status</HighlightHeader>
                    <BigBold WordSpacing='-0.8rem'>
                        {windSpeed} <HighlightSub> mph </HighlightSub>
                    </BigBold>
                    {/*Todo connect to materal icons (and replace this png image)*/}
                    <FlexRowCenter width='80px' justifyContent='space-around'>
                        <WindDirectionIcon rotateDeg={compassRotate} />
                        <ThinWhite>{windDirection}</ThinWhite>
                    </FlexRowCenter>
                </StyledHighlightCard>

                <StyledHighlightCard as='article'>
                    <HighlightHeader>Humidity</HighlightHeader>
                    <BigBold WordSpacing='-0.8rem' y='7px'>
                        {humidity} <HighlightSub> % </HighlightSub>
                    </BigBold>
                    {/*Todo later show this numbers like in figma*/}
                    <FlexColumnCenter width='240px' height='27px' y='7px'>
                        <FlexRowCenter>
                            <ProgressBarSmall>0</ProgressBarSmall>
                            <ProgressBarSmall x='10px'>50</ProgressBarSmall>
                            <ProgressBarSmall>100</ProgressBarSmall>
                        </FlexRowCenter>
                        <HumidityMeter
                            value={humidity}
                            min='0'
                            max='100'
                            low='0'
                            high='100'
                        />
                        <ProgressBarSmall align='flex-end'>%</ProgressBarSmall>
                    </FlexColumnCenter>
                </StyledHighlightCard>

                <StyledHighlightCard as='article' small>
                    <HighlightHeader>Visibility</HighlightHeader>
                    <BigBold>
                        {visibility} <HighlightSub>miles</HighlightSub>
                    </BigBold>
                </StyledHighlightCard>

                <StyledHighlightCard as='article' small>
                    <HighlightHeader>Air Pressure</HighlightHeader>
                    <BigBold>
                        {airPressure} <HighlightSub>mb</HighlightSub>
                    </BigBold>
                </StyledHighlightCard>
            </HighlightsGrid>
        </FlexColumnCenter>
    )
}

export default TodayHighlights
