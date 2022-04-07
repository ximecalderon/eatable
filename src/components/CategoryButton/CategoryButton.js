import { Button } from "./styles";

function CategoryButton({ children, ...rest }) {
  return (
    <Button
      {...rest}
    >
      {children}
    </Button>
  )
};

export default CategoryButton;