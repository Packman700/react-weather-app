import styled from "styled-components";

const FlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "space-between"};
  
  width: ${({width}) => width ? width : '100%'};
  margin-bottom: ${({mb}) => mb ? mb : 0};
`

export default FlexRowCenter