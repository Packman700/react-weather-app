import styled from "styled-components";

const WeatherName = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayLight};
`;

export default WeatherName;
