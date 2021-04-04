import React from 'react'
import dateFormat from 'dateformat'

import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'
import FlexRowCenter from 'styled-components/position/FlexRowCenter'
import DarkGrayText from 'styled-components/p/DarkGrayText'
import TodayTemperatureH1 from 'styled-components/h1/TodayTemperatureH1'
import TodayTemperatureSub from 'styled-components/sub/TodayTemperatureSub'
import WeatherName from 'styled-components/p/WeatherName'

function TodayWeather(props) {
    if (props?.data?.consolidated_weather === undefined) return null

    const {
        weather_state_abbr: weatherImage,
        weather_state_name: weatherName,
    } = props.data.consolidated_weather[0]
    let {
        the_temp: temperature,
        applicable_date: date,
    } = props.data.consolidated_weather[0]

    const location = props.data.title
    const PHOTOS_LOCATION = 'https://www.metaweather.com/static/img/weather/'

    // Format temperature
    const [formattedTemperature, scaleMark] = props.convertTemperature(
        temperature
    )

    return (
        <FlexColumnCenter as='article' mb='24px'>
            <img
                src={`${PHOTOS_LOCATION}${weatherImage}.svg`}
                alt={`${weatherName} icon`}
                height='234px'
            />
            <TodayTemperatureH1 mt='36px' mb='25px'>
                {formattedTemperature}
                <TodayTemperatureSub>{scaleMark}</TodayTemperatureSub>
            </TodayTemperatureH1>
            <WeatherName>{weatherName}</WeatherName>
            <FlexRowCenter width='160px' mt='62px' mb='40px'>
                <DarkGrayText>Today</DarkGrayText>
                <DarkGrayText as='span' aria-hidden='true'>
                    •
                </DarkGrayText>
                <DarkGrayText as='time' datatime={date}>
                    {dateFormat(date, 'ddd, d mmm')}
                </DarkGrayText>
            </FlexRowCenter>
            <DarkGrayText locationIcon fontWeight='600' as='cite'>
                {location}
            </DarkGrayText>
        </FlexColumnCenter>
    )
}

export default TodayWeather
