import React from "react";
import dateFormat from "dateformat";
import FlexRowCenter from "styled-components/position/FlexRowCenter";

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
            <div key={id}>
                <h2>{date}</h2>
                <img src={`${PHOTOS_LOCATION}${weatherImage}.svg`} alt={`${weatherName} icon`} height="100px"/>
                <p>{formattedMaxTemperature}{scaleMark}</p>
                <p>{formattedMinTemperature}{scaleMark}</p>
            </div>
        )
    })

    return (
        <FlexRowCenter as="article">{weatherCards}</FlexRowCenter>
    )
}

export default WeatherForecastCards