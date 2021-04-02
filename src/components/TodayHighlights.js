import React from "react";
import compassArrow from "components/navigation.png"
import StyledHighlightCard from "styled-components/div/StyledHighlightCard";
import FlexRowCenter from "styled-components/position/FlexRowCenter";
import HighlightsGrid from "styled-components/grid/HighlightsGrid";

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
        <FlexRowCenter justifyContent="center">
            <HighlightsGrid>
                {/* Todo add semantic task names */}
                <StyledHighlightCard as="article" >
                    <header>Wind status</header>
                    <p>{windSpeed}mph</p>
                    {/*Todo connect to materal icons (and replace this png image)*/}
                    <img src={compassArrow} alt="compass direction" style={{transform: `rotate(${compassRotate}deg)`}}/>
                    <p>{windDirection}</p>
                </StyledHighlightCard>

                <StyledHighlightCard as="article" >
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
                </StyledHighlightCard>

                <StyledHighlightCard as="article" small>
                    <header>Visibility</header>
                    <p>{visibility} miles</p>
                </StyledHighlightCard>

                <StyledHighlightCard as="article" small>
                    <header>Air Pressure</header>
                    <p>{airPressure} mb</p>
                </StyledHighlightCard>
            </HighlightsGrid>
        </FlexRowCenter>
    )
}

export default TodayHighlights