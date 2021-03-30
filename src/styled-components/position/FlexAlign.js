import styled from "styled-components";

const FlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${({width}) => width ? width : 'auto'};
  margin-bottom: ${({mb}) => mb ? mb : 0};
`

export default FlexRowCenter