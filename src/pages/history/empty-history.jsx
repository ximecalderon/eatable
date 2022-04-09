import styled from "@emotion/styled";
import { RiCalendarTodoLine } from "react-icons/ri";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptySubtitle = styled.p`
  ${typography.size.xl}
  ${typography.weigth.semibold}
  color:${colors.gray};
`;

const IconEmpty = styled(RiCalendarTodoLine)`
  width: 106px;
  height: 118px;
`;

function EmptyHistory(params) {
  return (
    <EmptyContainer>
      <IconEmpty />
      <EmptySubtitle>No history yet</EmptySubtitle>
    </EmptyContainer>
  );
}

export default EmptyHistory;
