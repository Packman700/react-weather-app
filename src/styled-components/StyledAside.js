import styled from "styled-components";
import FlexColumnCenter from "styled-components/position/FlexColumnCenter";

const StyledAside = styled(FlexColumnCenter)`
  width: ${({ theme }) => theme.widths.asideWidth};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 25px calc(100% / 25) 0 calc(100% / 25);

  @media ${({ theme }) => theme.breakPoints.verticalRotation} {
    & {
      width: 100vw;
    }
  }
`;

export default StyledAside;
