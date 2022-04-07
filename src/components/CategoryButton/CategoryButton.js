import { Button } from "./styles";
import { toCamelCase } from "../../utils";

function CategoryButton({ children, ...rest }) {
  return (
    <Button
      {...rest}
    >
      {toCamelCase(children)}
    </Button>
  )
};

export default CategoryButton;