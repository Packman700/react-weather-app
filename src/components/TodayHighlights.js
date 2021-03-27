import React from "react";
import compassArrow from "./navigation.png"

function TodayHighlights(props){
    if (props?.data?.consolidated_weather === undefined) return null

    let { wind_direction_compass:windDirection,
        wind_direction: compassRotate,
        wind_speed:windSpeed,
        air_pressure: airPressure,
        humidity, visibility} = props.data.consolidated_weather[0]

    compassRotate = Math.round(compassRotate)
    windSpeed = Math.round(windSpeed)
    airPressure = Math.round(airPressure)
    humidity = Math.round(humidity)
    visibility = (Math.round(visibility * 10)/10).toString().replace('.',',')

    return(
        <section>
            {/* Todo add semantic task names */}
            <article>
                <header>Wind status</header>
                <p>{windSpeed}mph</p>
                {/*Todo connect to materal icons (and replace this png image)*/}
                <img src={compassArrow} alt="compass direction" style={{transform: `rotate(${compassRotate}deg)`}}/>
                <p>{windDirection}</p>
            </article>

            <article>
                <header>Humidity</header>
                <p>{humidity}%</p>
                {/*Todo later show this numbers like in figma*/}
                <div>
                    <small>0</small>
                    <small>50</small>
                    <small>100</small>
                </div>
                <progress value={humidity} max="100"/>
                <small>%</small>
            </article>

            <article>
                <header>Visibility</header>
                <p>{visibility} miles</p>
            </article>

            <article>
                <header>Air Pressure</header>
                <p>{airPressure} mb</p>
            </article>
        </section>
    )
}

export default TodayHighlights