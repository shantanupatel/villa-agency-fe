import Button from "react-bootstrap/Button";
import "./ButtonComponent.scss";

const ButtonComponent = ({ title, variant, type }) => {
  return (
    <div>
      <Button variant={variant} type={type}>
        {title}
      </Button>
    </div>
  );
};

export default ButtonComponent;
