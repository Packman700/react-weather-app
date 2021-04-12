import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadIcon = styled.div`
  position: relative;
  animation: ${rotate} 2000ms linear infinite normal;
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  
  ::before {
    position: absolute;
    left: -21px;
    top: -21px;
    font-family: 'Material Icons', 'Raleway', sans-serif;
    font-size: 42px;
    font-weight: 300;
    content: 'refresh';
  }
`

export default LoadIcon