import styled, { css } from 'styled-components'

const CloudIcon = styled.div`
      position: absolute;
      top: ${({top}) => top};
      left: ${({left1}) => left1};
      width: ${({size}) => size};
      height: ${({size}) => size};
      background-image: url("https://www.metaweather.com/static/img/weather/sn.svg");
      clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
      opacity: 0.1;
      z-index: 1;

      @media ${({ theme }) => theme.breakPoints.verticalRotation} {
        & {
          left: ${({left2}) => left2};
          ${({right2}) => right2 && css`
            left: unset;
          `}
          right: ${({right2}) => right2};
        }
  }
`

export default CloudIcon