import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
const StyledInput = styled.input`
  padding: 0.5rem;
  ${typography.lg};
  border-radius: 1rem;
  border: none;
  background-color: white;
  color: ${colors.gray.dark};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}

export default Input;
