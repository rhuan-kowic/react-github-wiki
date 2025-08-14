import gitLogo from "../assets/logo.png"
import Input from "../components/Input";

import { Container } from "./styles";
function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo GitHub"/>
      <Input />
    </Container>
  );
}

export default App;
