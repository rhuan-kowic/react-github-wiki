import gitLogo from "../assets/logo.png"
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

import { Container } from "./styles";
function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo GitHub"/>
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
