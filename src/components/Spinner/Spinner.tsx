import { Container, Logo } from "./styles";
import spinner from "../../assets/spinner5.gif";

const Spinner = () => {
  return (
    <Container>
      <Logo src={spinner} alt="spinner__image" />
    </Container>
  );
};

export default Spinner;
