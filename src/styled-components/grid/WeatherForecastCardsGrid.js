import styled from "styled-components";
const WeatherForecastCardsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: 177px;
  grid-gap: 26px;
  
  @media ${({theme}) => theme.breakPoints.smallScreen}{
    &{
      grid-template-columns: repeat(3, 120px);
      grid-template-rows: repeat(2, 177px);
    }
  }

  @media ${({theme}) => theme.breakPoints.weatherCardsTwoRows}{
    &{
      grid-template-columns: repeat(2, 120px);
      grid-template-rows: repeat(3, 177px);
    }
  }
`

export default WeatherForecastCardsGrid