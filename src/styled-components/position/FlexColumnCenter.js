import styled from "styled-components";

const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${({width}) => width ? width : 'auto'};
`

export default FlexColumnCenter