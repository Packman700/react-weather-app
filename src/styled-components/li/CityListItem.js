import styled from "styled-components";

const CityListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  
  width: 100%;
  height: 64px;
  margin-bottom: 17px;
  padding-left: 12px;
  
  font-weight: 100;
  font-size: 19px;
  
  :hover {  
    border: 1px solid ${({theme}) => theme.colors.grayDark};
    padding-left: 11px;
    
    ::after {
      position: absolute;
      font-family: 'Material Icons', 'Raleway', sans-serif;
      content: "keyboard_arrow_right";
      font-size: 28px;
      font-weight: 400;
      color: ${({theme}) => theme.colors.grayMuted};
      right: 8px;
      top: 18px;

    }
  }
`

export default CityListItem