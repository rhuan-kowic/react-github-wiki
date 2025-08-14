import gitLogo from "../assets/logo.png"

import { Container } from "./styles";
function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo GitHub"/>
    </Container>
  );
}

export default App;
