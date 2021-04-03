import styled from "styled-components";

const HighlightsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 328px);
  grid-template-rows: 204px 160px;
  grid-gap: 48px;

  @media ${({ theme }) => theme.breakPoints.smallScreen} {
    & {
      grid-template-columns: 328px;
      grid-template-rows: repeat(2, 204px) repeat(2, 160px);
      grid-gap: 30px;
    }
  }
`;

export default HighlightsGrid;
