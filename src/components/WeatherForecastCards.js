import React from "react";
import dateFormat from "dateformat";
import FlexRowCenter from "styled-components/position/FlexRowCenter";
import StyledWeatherForecastCard from "styled-components/div/StyledWeatherForecastCard";
import ThinWhite from "styled-components/p/ThinWhite";
import ThinLightGray from "styled-components/p/ThinLightGray";
import Img from "styled-components/img/Img";
import WeatherForecastCardsGrid from "styled-components/grid/WeatherForecastCardsGrid";

function WeatherForecastCards(props){
    if (props?.data?.consolidated_weather === undefined) return null

    const weatherCards = props.data.consolidated_weather.slice(1,6).map((cardInfo,index)=>{
        let { weather_state_abbr:weatherImage,
                weather_state_name:weatherName,
                min_temp:minTemperature,
                max_temp:maxTemperature,
                applicable_date:date,
                id} = cardInfo
        const PHOTOS_LOCATION = "https://www.metaweather.com/static/img/weather/"

        // Format date
        if (index === 0) date = "Tomorrow"
        else date = dateFormat(date,"ddd d mmm")

        // Format temperature
        const [formattedMaxTemperature,scaleMark] = props.convertTemperature(maxTemperature)
        const [formattedMinTemperature] = props.convertTemperature(minTemperature)

        return (
            <StyledWeatherForecastCard key={id}>
                <ThinWhite as="header">{date}</ThinWhite>
                <Img src={`${PHOTOS_LOCATION}${weatherImage}.svg`} alt={`${weatherName} icon`} height="56px" mt="-5px"/>
                <FlexRowCenter width="70px">
                    <ThinWhite>{formattedMaxTemperature}{scaleMark}</ThinWhite>
                    <ThinLightGray>{formattedMinTemperature}{scaleMark}</ThinLightGray>
                </FlexRowCenter>
            </StyledWeatherForecastCard>
        )
    })

    return (
        // todo align like in figma
        <FlexRowCenter justifyContent="center">
            <WeatherForecastCardsGrid>{weatherCards}</WeatherForecastCardsGrid>
        </FlexRowCenter>
    )
}

export default WeatherForecastCards