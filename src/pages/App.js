import { useState } from "react";
import gitLogo from "../assets/logo.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

import { Container } from "./styles";
import Button from "../components/Button";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
          return;
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Repositório não encontrado.");
      } else {
        alert("Ocorreu um erro ao buscar o repositório.");
      }
    }
  };

  const handleRemoveRepo = (id) => {
    const reposFilters = repos.filter((repo) => repo.id !== id);
    setRepos(reposFilters);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo GitHub" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
