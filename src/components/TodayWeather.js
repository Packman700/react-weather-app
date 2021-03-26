import React from "react";
import dateFormat from "dateformat";

function TodayWeather(props){
    const { weather_state_abbr:weatherImage,
            weather_state_name:weatherName,} = props.data.consolidated_weather[0]
    let   { the_temp:temperature,
            applicable_date:date } = props.data.consolidated_weather[0]

    const location = props.data.title
    const PHOTOS_LOCATION = "https://www.metaweather.com/static/img/weather/"

    // Format temperature
    const[formattedTemperature,scaleMark] = props.convertTemperature(temperature)

    return(
        <article>
            <img src={`${PHOTOS_LOCATION}${weatherImage}.svg`} alt={`${weatherName} icon`} height="200px"/>
            <p>{weatherName}</p>
            <p>{formattedTemperature}{scaleMark}</p>
            <p>Today</p>
            <p>{dateFormat(date,"ddd d mmm")}</p>
            <p>{location}</p>
        </article>
    )
}

export default TodayWeather