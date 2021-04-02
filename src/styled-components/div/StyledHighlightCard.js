import styled from "styled-components";
import CARD_TEMPLATE from "styled-components/div/CARD_TEMPLATE";

const StyledHighlightCard = styled(CARD_TEMPLATE)`
  height: ${({small}) => small ? "160px" : "204px"};
  width: 328px;

  padding-top: 22px;

  margin-left: ${({ml}) => ml && ml};
  margin-right: ${({mr}) => mr && mr};
`

export default StyledHighlightCard