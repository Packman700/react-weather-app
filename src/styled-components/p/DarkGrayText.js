import styled, { css } from "styled-components";

const DarkGrayText = styled.p`
  font-size: 18px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  color: ${({ theme }) => theme.colors.grayDark};

  ${({ locationIcon }) =>
    locationIcon &&
    css`
      ::before {
        position: relative;
        top: 0.14em;
        left: -0.1em;
        font-family: "Material Icons", "Raleway", sans-serif;
        font-size: 1.2em;

        font-weight: 300;
        content: "place";
      }
    `}
`;

export default DarkGrayText;
