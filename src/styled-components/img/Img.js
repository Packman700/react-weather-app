import styled from "styled-components";

const Img = styled.img`
  margin-bottom: ${({mb}) => mb ? mb : 0};
  margin-top: ${({mt}) => mt ? mt : 0};
`

export default Img