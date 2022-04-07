import * as Styled from "./styles";
import { RiSearchLine } from "react-icons/ri";

function SearchInput({ placeholder = "", ...rest }) {
  return (
    <Styled.InputContainer>
      <RiSearchLine style={{ fontSize: "1.5rem" }} />
      <Styled.Input {...rest} placeholder={placeholder} />
    </Styled.InputContainer>
  )
}

export default SearchInput;