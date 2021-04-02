import styled from "styled-components";

const StyledWeatherForecastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 120px;
  height: 177px;

  background: ${({theme}) => theme.colors.primaryLight};
  padding: 18px 0;
  margin: 16px 13px;
`

export default StyledWeatherForecastCard